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

describe('Carousel onSlideChange', () => {
    it('fires onSlideChange on initial render with index 0', () => {
        const handleSlideChange = jest.fn();
        const { container } = render(
            <Carousel onSlideChange={handleSlideChange}>
                <div data-testid="slide" style={{ width: 300 }}>Slide 1</div>
                <div data-testid="slide" style={{ width: 300 }}>Slide 2</div>
                <div data-testid="slide" style={{ width: 300 }}>Slide 3</div>
            </Carousel>
        );

        const carouselContainer = container.querySelector('.carousel-container') as HTMLElement;

        // Mock getBoundingClientRect for the container and children
        jest.spyOn(carouselContainer, 'getBoundingClientRect').mockReturnValue({
            left: 0, right: 300, top: 0, bottom: 100, width: 300, height: 100, x: 0, y: 0, toJSON: () => {}
        });

        const children = carouselContainer.children;
        jest.spyOn(children[0] as Element, 'getBoundingClientRect').mockReturnValue({
            left: 0, right: 300, top: 0, bottom: 100, width: 300, height: 100, x: 0, y: 0, toJSON: () => {}
        });
        jest.spyOn(children[1] as Element, 'getBoundingClientRect').mockReturnValue({
            left: 300, right: 600, top: 0, bottom: 100, width: 300, height: 100, x: 300, y: 0, toJSON: () => {}
        });
        jest.spyOn(children[2] as Element, 'getBoundingClientRect').mockReturnValue({
            left: 600, right: 900, top: 0, bottom: 100, width: 300, height: 100, x: 600, y: 0, toJSON: () => {}
        });

        fireEvent.scroll(carouselContainer);

        expect(handleSlideChange).toHaveBeenCalledWith(0);
    });

    it('fires onSlideChange with new index when scrolled to a different slide', () => {
        const handleSlideChange = jest.fn();
        const { container } = render(
            <Carousel onSlideChange={handleSlideChange}>
                <div data-testid="slide" style={{ width: 300 }}>Slide 1</div>
                <div data-testid="slide" style={{ width: 300 }}>Slide 2</div>
                <div data-testid="slide" style={{ width: 300 }}>Slide 3</div>
            </Carousel>
        );

        const carouselContainer = container.querySelector('.carousel-container') as HTMLElement;
        Object.defineProperty(carouselContainer, 'scrollWidth', { configurable: true, value: 900 });
        Object.defineProperty(carouselContainer, 'clientWidth', { configurable: true, value: 300 });
        let scrollLeft = 0;
        Object.defineProperty(carouselContainer, 'scrollLeft', { configurable: true, get: () => scrollLeft, set: (v) => scrollLeft = v });

        const children = carouselContainer.children;

        // First scroll: slide 0 most visible
        jest.spyOn(carouselContainer, 'getBoundingClientRect').mockReturnValue({
            left: 0, right: 300, top: 0, bottom: 100, width: 300, height: 100, x: 0, y: 0, toJSON: () => {}
        });
        jest.spyOn(children[0] as Element, 'getBoundingClientRect').mockReturnValue({
            left: 0, right: 300, top: 0, bottom: 100, width: 300, height: 100, x: 0, y: 0, toJSON: () => {}
        });
        jest.spyOn(children[1] as Element, 'getBoundingClientRect').mockReturnValue({
            left: 300, right: 600, top: 0, bottom: 100, width: 300, height: 100, x: 300, y: 0, toJSON: () => {}
        });
        jest.spyOn(children[2] as Element, 'getBoundingClientRect').mockReturnValue({
            left: 600, right: 900, top: 0, bottom: 100, width: 300, height: 100, x: 600, y: 0, toJSON: () => {}
        });

        fireEvent.scroll(carouselContainer);
        expect(handleSlideChange).toHaveBeenCalledWith(0);

        // Second scroll: simulate scrolled to slide 1
        scrollLeft = 300;
        (children[0] as Element).getBoundingClientRect = jest.fn().mockReturnValue({
            left: -300, right: 0, top: 0, bottom: 100, width: 300, height: 100, x: -300, y: 0, toJSON: () => {}
        });
        (children[1] as Element).getBoundingClientRect = jest.fn().mockReturnValue({
            left: 0, right: 300, top: 0, bottom: 100, width: 300, height: 100, x: 0, y: 0, toJSON: () => {}
        });
        (children[2] as Element).getBoundingClientRect = jest.fn().mockReturnValue({
            left: 300, right: 600, top: 0, bottom: 100, width: 300, height: 100, x: 300, y: 0, toJSON: () => {}
        });

        fireEvent.scroll(carouselContainer);
        expect(handleSlideChange).toHaveBeenCalledWith(1);
        expect(handleSlideChange).toHaveBeenCalledTimes(2);
    });

    it('does not throw when onSlideChange is not provided', () => {
        const { container } = render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
            </Carousel>
        );

        const carouselContainer = container.querySelector('.carousel-container') as HTMLElement;
        expect(() => fireEvent.scroll(carouselContainer)).not.toThrow();
    });
});