# Custom Research Icons

This directory contains custom icons for the research sections on the homepage. You can easily replace or add new icons by following these guidelines:

## How to Add/Replace Icons

### 1. Icon File Formats
- **SVG** (recommended): Scalable vector graphics that work well at any size
- **PNG/JPG**: Raster images (16x16px recommended for best quality)

### 2. File Naming Convention
Name your icon files to match the research section keys in `_data/about.yml`:
- `biobehavior.svg` - for Biobehavior section
- `ingestibles.svg` - for Implantable and Ingestible Devices section
- `wearable.svg` - for Wearable Computing section
- `aci.svg` - for Animal-Computer Interaction section

### 3. Icon Requirements
- **Size**: 16x16px or 24x24px (will be scaled to 16x16px in the UI)
- **Color**: Icons will be automatically colored white using CSS filters
- **Format**: SVG preferred for crisp display at all sizes
- **Style**: Simple, clean designs that work well at small sizes

### 4. Updating the Configuration

To add a new research section or modify existing ones, edit `_data/about.yml`:

```yaml
research_sections:
  your_new_section:
    heading: "Your New Section"
    description: |
      Description of your research area.
    icon:
      type: "svg"  # or "image" for PNG/JPG
      path: "/assets/icons/your_new_section.svg"
      fallback: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"  # SVG path as fallback
    color: "var(--color-primary)"  # CSS color variable
    href: "#your-new-section"
```

### 5. Icon Design Tips
- Keep designs simple and recognizable at small sizes
- Use consistent stroke weights (1-2px)
- Ensure good contrast when converted to white
- Test icons at 16x16px to ensure they're still readable
- Consider using monochrome designs for better consistency

### 6. Fallback System
The system includes a fallback mechanism:
1. First, it tries to load the custom icon file
2. If the file fails to load, it falls back to the inline SVG path
3. This ensures icons always display, even if custom files are missing

### 7. Color Customization
Each research section can have its own color by modifying the `color` field in the YAML configuration. Use CSS custom properties for consistency:
- `var(--color-success)` - Green
- `var(--color-accent)` - Teal
- `var(--color-info)` - Blue
- `var(--color-highlight)` - Red/Orange
- `var(--color-primary)` - Primary brand color

## Example Custom Icons

The current icons are simple SVG designs that represent each research area. You can replace them with more detailed or stylized versions that better represent your specific research focus.

## Troubleshooting

- **Icon not showing**: Check that the file path in `_data/about.yml` is correct
- **Icon too large/small**: Ensure your SVG has proper viewBox dimensions
- **Icon not white**: The CSS filter should handle this automatically
- **Fallback not working**: Check that the fallback SVG path is valid
