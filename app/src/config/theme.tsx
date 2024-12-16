const defaultColors = {
    primary: {
      default: "#7E53D4",
      hover: "#513588",
      text: "#F1F1F1",
    },

    secondary: {
      default: "#62D14F",
      hover: "#51A044",
      text: "#F1F1F1",
    },

    selected: {
      default: "#D8C5FF",
      hover: "#9D7AE1",
      text: "#1C1C1C",
    },

    gray: {
      default: "#C9C9C9",
      hover: "#999999",
      text: "#1C1C1C",
    },

    success: {
      default: "#32CA70",
      hover: "#32CA70",
      text: "#F1F1F1",
    },

    info: {
      default: "#4E9BFE",
      hover: "#4E9BFE",
      text: "#F1F1F1",
    },

    warning: {
      default: "#EF9F41",
      hover: "#EF9F41",
      text: "#F1F1F1",
    },

    error: {
      default: "#EE4848",
      hover: "#EE4848",
      text: "#F1F1F1",
    },
  };

  const defaultSpacing = {
    none: "0",
    very_small: 4,
    small: 8,
    medium: 16,
    very_medium: 24,
    large: 32,
    very_large: 48,
    x_very_large: 72,
  };

  const defaultFontSize = {
    very_small: 12,
    small: 14,
    medium: 16,
    large: 18,
    very_large: 24,
  };

  const defaultBorderRadius = {
    small: 4,
    medium: 8,
  };

  const defaultBreakpoints = {
    small: 600,
    medium: 900,
    large: 1200
  };

  const defaultShadow = {
    default: "0px 0px 4px rgba(0, 0, 0, 0.75)",
    selected: "0px 0px 8px rgba(0, 0, 0, 0.75)",
  };

  export const theme = {
    light: {
      spacing: {
        ...defaultSpacing,
      },
      border_radius: {
        ...defaultBorderRadius,
      },
      font_size: {
        ...defaultFontSize,
      },
      breakpoints: {
        ...defaultBreakpoints,
      },
      shadow: {
        ...defaultShadow,
      },
      colors: {
        background: "#F1F1F1",
        text: {
            default: "#1C1C1C",
            contrast: "#F1F1F1",
        },
        ...defaultColors,
      },
    },

    dark: {
      spacing: {
        ...defaultSpacing,
      },
      border_radius: {
        ...defaultBorderRadius,
      },
      font_size: {
        ...defaultFontSize,
      },
      breakpoints: {
        ...defaultBreakpoints,
      },
      shadow: {
        ...defaultShadow,
      },
      colors: {
        background: "#1C1C1C",
        text: {
            default: "#F1F1F1",
            contrast: "#1C1C1C",
        },
        ...defaultColors,
      },
    },
  };
