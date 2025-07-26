/**
 * URL константи для всього додатку
 * Всі посилання та шляхи до зображень
 */

/* eslint-disable @typescript-eslint/no-duplicate-enum-values */

/**
 * Основні URL для навігації та зовнішніх посилань
 */
export enum Urls {
  // Header навігація
  PLUGIN = "/",
  LEGAL = "/",
  PRICING = "/",
  SING_UP = "/",

  // Intro блок
  GET_EARLY_ACCESS = "/",

  // Extension блок
  INSTALL_EXTENTION = "https://chromewebstore.google.com/detail/neurolover/dmdaogdohfpbhenkhjgmlloganpapoao",

  // Footer соціальні мережі
  DISCORD = "/",
  INSTAGRAM = "/",
  REDDIT = "/",
  X = "/",
  TELEGRAM = "/",
}

/**
 * Шляхи до зображень для Info Extension компонента
 * Використовується в components/info_extension.tsx
 */
export enum InfoExtentionImg {
  TONESELECTORUI = "/extention/info_extensions.svg",
  MESSAGELENGTHCONTROL = "/extention/info_extensions.svg",
  FLOATINGMODE = "/extention/info_extensions.svg",
  PINNEDMODE = "/extention/info_extensions.svg",
  LIGHTORDARKMODE = "/extention/info_extensions.svg",
}
