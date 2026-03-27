# Changelog

All notable changes to this project will be documented in this file.

## [0.0.1-beta.2] - 2026-03-27

### Added
- Imperative navigation API via `ref` prop (`next()`, `prev()`, `goTo(index)`)
- Option to hide default navigation arrows in Carousel
- `onSlideChange` prop to listen to slide changes
- End-to-end tests for navigation interaction, conditional rendering, and auto-slide features

### Changed
- Updated package to use React 19+ as peer dependency
- Declared CSS sideEffects for effective tree shaking
- Refined `iconStyles` type and overhauled package metadata
- Improved the default carousel icon

### Fixed
- Fixed examples to consume full width of the page
