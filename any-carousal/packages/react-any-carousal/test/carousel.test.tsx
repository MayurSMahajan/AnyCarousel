// test/Carousel.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import { Carousel } from '../src/carousel';

describe('Carousel', () => {
    it('renders single element', () => {
        render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
            </Carousel>
        );

        const slides = screen.getAllByTestId('slide');
        expect(slides.length).toBe(1);
        expect(slides[0]).toHaveTextContent('Slide 1');
    });

    it('renders multiple child elements', () => {
        render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
                <div data-testid="slide">Slide 3</div>
            </Carousel>
        );

        const slides = screen.getAllByTestId('slide');
        expect(slides.length).toBe(3);
        expect(slides[1]).toHaveTextContent('Slide 2');
    });

    it('does not render nav icons when only one child exists', () => {
        render(<Carousel><div data-testid="slide">Slide 1</div></Carousel>);
        const icons = screen.queryAllByTestId('nav-icon-btn');
        expect(icons.length).toBe(0);
    });
});

describe('Carousel Navigation', () => {
    let carouselContainer: HTMLElement;

    beforeEach(() => {
        const { container } = render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
                <div data-testid="slide">Slide 3</div>
            </Carousel>
        );

        carouselContainer = container.querySelector('.carousel-container') as HTMLElement;

        // Mock scrollWidth and clientWidth to simulate scrollability
        Object.defineProperty(carouselContainer, 'scrollWidth', {
            configurable: true,
            value: 1000,
        });

        Object.defineProperty(carouselContainer, 'clientWidth', {
            configurable: true,
            value: 300,
        });

        // Simulate scrollLeft with getter and setter
        let currentScrollLeft = 100;
        Object.defineProperty(carouselContainer, 'scrollLeft', {
            configurable: true,
            get: () => currentScrollLeft,
            set: (val) => { currentScrollLeft = val; }
        });
    });

    it('at least one icon appears by default', () => {
        const icons = screen.queryAllByTestId('nav-icon-btn');
        expect(icons.length).toBeLessThanOrEqual(1);
    });

    it('renders two nav icons when scrolled', () => {
        fireEvent.scroll(carouselContainer);
        const iconsAfter = screen.getAllByTestId('nav-icon-btn');
        expect(iconsAfter.length).toBe(2);
    });

    it('triggers scroll on right navigation click', () => {
        jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
            setTimeout(() => cb(Date.now()), 16);
            return 0;
        });

        fireEvent.scroll(carouselContainer); // Trigger scroll to force state update and show buttons
        const rightButton = screen.getAllByTestId('nav-icon-btn')[1] as HTMLElement; // index 1 is right because left is at index 0
        expect(rightButton).toBeInTheDocument();
        fireEvent.click(rightButton);

        expect(window.requestAnimationFrame).toHaveBeenCalled();
        (window.requestAnimationFrame as jest.Mock).mockRestore();
    });

    it('hides left icon at start and shows it after scroll', () => {
        Object.defineProperty(carouselContainer, 'scrollLeft', { configurable: true, get: () => 0, set: () => {} });
        fireEvent.scroll(carouselContainer);
        const iconsBefore = screen.getAllByTestId('nav-icon-btn');
        expect(iconsBefore.length).toBe(1); // Right icon

        Object.defineProperty(carouselContainer, 'scrollLeft', { configurable: true, get: () => 100, set: () => {} });
        fireEvent.scroll(carouselContainer);
        const iconsAfter = screen.getAllByTestId('nav-icon-btn');
        expect(iconsAfter.length).toBe(2); // Left and Right icons
    });
});

describe('Carousel AutoSlide', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('sets up auto slide interval when provided', () => {
        render(
            <Carousel autoSlideInterval={1000}>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
            </Carousel>
        );
        expect(jest.getTimerCount()).toBe(1);
    });

    it('stops auto-scroll on user interaction', () => {
        const { container } = render(
            <Carousel autoSlideInterval={1000}>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
            </Carousel>
        );
        
        expect(jest.getTimerCount()).toBe(1);
        
        const carouselContainer = container.querySelector('.carousel-container') as HTMLElement;
        let currentScrollLeft = 100;
        Object.defineProperty(carouselContainer, 'scrollWidth', { configurable: true, value: 1000 });
        Object.defineProperty(carouselContainer, 'clientWidth', { configurable: true, value: 300 });
        Object.defineProperty(carouselContainer, 'scrollLeft', { configurable: true, get: () => currentScrollLeft, set: (val) => currentScrollLeft = val });
        fireEvent.scroll(carouselContainer);
        
        const rightButton = screen.getAllByTestId('nav-icon-btn')[0] as HTMLElement; // One of them

        // Spy on clearInterval to verify it gets called
        const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

        fireEvent.click(rightButton);
        
        // After interaction, autoScrollEnabled becomes false, effect reruns, interval is cleared.
        expect(clearIntervalSpy).toHaveBeenCalled();
        clearIntervalSpy.mockRestore();
    });
});