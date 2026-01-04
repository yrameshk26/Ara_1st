# Theme Selection Guide

## How to Change Theme

Open `/Users/rameshyoha/Documents/ramesh/Ara_1st/js/main.js` and find line **8**:

```javascript
const ACTIVE_THEME = 'theme1';
```

Change `'theme1'` to any of the available themes:

## Available Themes

### Theme 1: Winter Wonderland ❄️ (Current)
```javascript
const ACTIVE_THEME = 'theme1';
```
- **Colors:** Sky Blue, Cyan
- **Vibe:** Cool, crisp, winter celebration
- **Best for:** Winter birthdays, elegant celebrations

### Theme 2: Soft Blush 🌸
```javascript
const ACTIVE_THEME = 'theme2';
```
- **Colors:** Soft Pink, Rose, Peach
- **Vibe:** Gentle, feminine, dreamy
- **Best for:** Princess themes, delicate celebrations

### Theme 3: Modern Sage 🌿
```javascript
const ACTIVE_THEME = 'theme3';
```
- **Colors:** Sage Green, Emerald, Mint
- **Vibe:** Natural, calm, sophisticated
- **Best for:** Garden parties, organic themes

### Theme 4: Sunset Peach 🍑
```javascript
const ACTIVE_THEME = 'theme4';
```
- **Colors:** Peach, Coral, Amber
- **Vibe:** Warm, cheerful, inviting
- **Best for:** Summer parties, warm celebrations

### Theme 5: Lavender Dreams 💜
```javascript
const ACTIVE_THEME = 'theme5';
```
- **Colors:** Lavender, Purple, Violet
- **Vibe:** Elegant, magical, soft
- **Best for:** Fairy tale themes, elegant affairs

## Quick Switch Instructions

1. Open `js/main.js` in your editor
2. Find line 8: `const ACTIVE_THEME = 'theme1';`
3. Change to your desired theme (e.g., `'theme2'`, `'theme3'`, etc.)
4. Save the file
5. Refresh your browser to see the new theme!

## Customizing Themes

You can customize any theme by editing the `THEMES` object in `js/main.js` (starting around line 10).

Each theme has these properties:
- `name`: Display name
- `primary`: Main color
- `primaryLight`: Lighter shade
- `primaryDark`: Darker shade
- `accent`: Accent color
- `gradient`: Tailwind gradient classes
- `buttonGradient`: Button gradient classes
- `icon`: Theme emoji

## Example: Creating a Custom Theme

```javascript
theme6: {
    name: 'Your Custom Theme',
    primary: '#yourColor',
    primaryLight: '#lighterColor',
    primaryDark: '#darkerColor',
    accent: '#accentColor',
    gradient: 'from-color-400 via-color-500 to-color-600',
    buttonGradient: 'from-color-500 to-color-600',
    icon: '🎨'
}
```

Then set: `const ACTIVE_THEME = 'theme6';`
