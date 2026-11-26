import type { ThemeScheme } from "../contracts.js";
import { colors, familyTypography, scheme, theme } from "./shared.js";

// Cores da marca MaréPost (guia em marepost-logo/kit/GUIA.md)
const brand = {
  deep: "#0a1628",
  mid: "#0f2442",
  blue: "#14365c",
  waveDark: "#6ea0ff",
  waveLight: "#4a7fe0",
  light: "#e8f0ff",
};

function calmScheme(appearance: ThemeScheme) {
  const dark = appearance === "dark";
  const ink = dark ? brand.light : brand.deep;
  const mutedInk = dark ? "#9fb3d1" : "#4b5d78";
  const canvas = dark ? brand.deep : "#f5f8fd";
  const surface = dark ? brand.mid : "#ffffff";
  const raised = dark ? brand.blue : "#ffffff";
  const sunken = dark ? "#081120" : brand.light;
  const border = dark ? "#1f3d63" : "#d6e1f2";
  const fieldBorder = dark ? "#2f5482" : "#b3c4de";
  const accent = dark ? brand.waveDark : brand.blue;
  const accentInk = dark ? brand.deep : "#ffffff";
  const accentHover = dark ? "#8cb4ff" : brand.mid;
  const accentActive = dark ? "#a9c7ff" : brand.deep;
  const selection = dark ? "#1f3d63" : brand.light;
  const navigationActive = dark ? brand.blue : "#d3e2fb";
  const dangerFill = dark ? "oklch(0.35 0.1 25)" : "oklch(0.53 0.19 25)";

  return scheme(
    {
      colors: colors({
        canvas,
        ink,
        surface,
        surfaceRaised: raised,
        surfaceSunken: sunken,
        mutedInk,
        border,
        input: fieldBorder,
        fieldBorder,
        focus: dark ? brand.light : brand.waveLight,
        caret: dark ? brand.waveDark : brand.waveLight,
        link: dark ? brand.waveDark : "#2f62c4",
        selection,
        selectionInk: ink,
        actionFocal: accent,
        actionFocalInk: accentInk,
        actionFocalHover: accentHover,
        actionFocalActive: accentActive,
        actionPrimary: accent,
        actionPrimaryInk: accentInk,
        actionPrimaryHover: accentHover,
        actionPrimaryActive: accentActive,
        actionOrdinary: surface,
        actionOrdinaryInk: ink,
        actionOrdinaryBorder: fieldBorder,
        actionOrdinaryHover: sunken,
        actionOrdinaryActive: navigationActive,
        danger: dark ? "oklch(0.66 0.19 25)" : "oklch(0.53 0.19 25)",
        dangerInk: dark ? "oklch(0.12 0.01 50)" : "oklch(0.99 0 0)",
        actionDestructive: `color-mix(in oklch, ${dangerFill} 12%, transparent)`,
        actionDestructiveHover: `color-mix(in oklch, ${dangerFill} 20%, transparent)`,
        actionDestructiveActive: `color-mix(in oklch, ${dangerFill} 28%, transparent)`,
        actionDestructiveInk: dark ? "oklch(0.83 0.12 25)" : "oklch(0.43 0.18 25)",
        success: dark ? "oklch(0.27 0.05 155)" : "oklch(0.95 0.03 155)",
        successInk: dark ? "oklch(0.82 0.11 155)" : "oklch(0.37 0.09 155)",
        warning: dark ? "oklch(0.28 0.05 85)" : "oklch(0.96 0.04 85)",
        warningInk: dark ? "oklch(0.86 0.11 85)" : "oklch(0.42 0.09 75)",
        info: dark ? brand.blue : brand.light,
        infoInk: dark ? brand.light : brand.blue,
        sidebar: sunken,
        sidebarInk: ink,
        sidebarActive: navigationActive,
        sidebarActiveInk: dark ? brand.light : brand.blue,
        navigationHover: navigationActive,
        navigationActive,
        navigationActiveInk: dark ? brand.light : brand.blue,
        chart1: dark ? "oklch(0.74 0.14 45)" : "oklch(0.55 0.15 45)",
        chart2: dark ? "oklch(0.76 0.12 165)" : "oklch(0.54 0.11 165)",
        chart3: dark ? "oklch(0.75 0.13 250)" : "oklch(0.55 0.14 250)",
        chart4: dark ? "oklch(0.78 0.12 310)" : "oklch(0.58 0.13 310)",
        chart5: dark ? "oklch(0.82 0.12 85)" : "oklch(0.64 0.12 85)",
      }),
      typography: {
        ...familyTypography("manrope", {
          titleTracking: "-0.02em",
        }),
      },
      spacing: { sectionGap: "1.75rem", componentGap: "0.875rem" },
      shape: {
        radius: "0.625rem",
        radiusSm: "0.375rem",
        radiusMd: "0.5rem",
        radiusLg: "0.75rem",
        radiusMedia: "0.75rem",
      },
      elevation: { card: "none", focalAction: "none" },
      shell: { contentMaxWidth: "68rem", sidebarWidth: "15rem" },
      components: {
        button: "dither",
        card: "outlined",
        navigation: "quiet",
        tabs: "underline",
        input: "outlined",
        select: "outlined",
        badge: "tonal",
        toolbar: "flat",
        decoration: "dither",
      },
    },
    appearance,
  );
}

export const calmTheme = theme(
  "calm",
  "Calm",
  "MaréPost: deep navy, tide blue and soft light blue from the brand.",
  "lucide",
  { light: calmScheme("light"), dark: calmScheme("dark") },
);
