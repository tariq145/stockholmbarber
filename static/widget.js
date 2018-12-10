var widget = new SimplybookWidget({
  widget_type: "iframe",
  url: "https://stockholmbarber.simplybook.it",
  theme: "simple_beauty_theme",
  theme_settings: {
    sb_base_color: "#000000",
    header_color: "#ffffff",
    timeline_show_end_time: "0",
    timeline_modern_display: "as_slots",
    body_bg_color: "#ffffff",
    dark_font_color: "#171717",
    light_font_color: "#ffffff",
    hide_img_mode: "1",
    sb_busy: "#ffd4bd",
    sb_available: "#fafafa"
  },
  timeline: "modern",
  datepicker: "inline_datepicker",
  is_rtl: false,
  app_config: { predefined: [] }
});
