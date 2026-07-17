# Release Process

> HIKARI follows Semantic Versioning (SemVer).

## Versioning

```
MAJOR.MINOR.PATCH
 1.    0.   0
```

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## Release Steps

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create git tag: `git tag v1.0.0`
4. Push tag: `git push origin v1.0.0`
5. Create GitHub Release with release notes

## Changelog Format

```markdown
## [v1.2.0] — 2026-07-17
### Added
- New ROI calculator
### Changed
- Improved DVF search performance
### Fixed
- Auth redirect on expired token
```
