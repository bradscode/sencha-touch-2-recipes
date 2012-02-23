Recipes:2 Create original themes.
          http://recipe2.senchafy.com/

http://dev.ariel-networks.com/wp/archives/1471

Sorry, anyway, translated by google translate...
---
# Problem:
- Atmosphere and it becomes the default, called "I made Sencha Touch" indeed
- Appearance - Since the big part to appeal to the user, want to differentiate it from other apps

# Solution:
Is that. Scss file of Sencha Touch, to compile and add a variable for customization, you can create a CSS that you customized.

I think this time, I would like to apply to the application a theme color scheme was conscious of wind Google +.
. Scss that you create below.

<pre><code>
// Overwrites global css variables.
$base-color: #000;
$active-color: #E3E3E3;
$page-bg-color: #fff;
$base-gradient: 'flat';
$font-family: 'sans-serif';
$button-radius: .2em;
$list-bg-color: #fff;
$list-color: #666;

// Include Sencha Touch's styles.
@import 'sencha-touch/default/all';
@include sencha-panel;
@include sencha-buttons;
@include sencha-sheet;
@include sencha-picker;
@include sencha-tabs;
@include sencha-toolbar;
@include sencha-toolbar-forms;
@include sencha-indexbar;
@include sencha-list;
@include sencha-layout;
@include sencha-carousel;
@include sencha-form;
@include sencha-msgbox;
@include sencha-loading-spinner;
@include pictos-iconmask('list');

// Define 'app' button colors.
@include sencha-button-ui('app', #D14836, 'flat');
.x-button-app .x-button-label { color: #fff; }
</pre></code>

# Discussion:
Sencha Touch is so that developers can customize the theme, and provides some global variables that can be overwritten.

In this example, we have overridden base-color, active-color, such as page-bg-color, eight global variables. For the specifications of each variable is described in the documentation for the development.
http://docs.sencha.com/touch/2-0/#!/api/Global_CSS

. I make a button named theme, "app" in line 30 of file scss. This is a mix-ins that provide Sencha Touch (like the function that creates a definition of ※ CSS. For more details please check the official site, such as Sass) takes advantage of. As with global variables, the specification has been described in the developer documentation also mix-in.

Need to check the specifications are, simply by adding just a few lines to. Scss the default file, you can customize the look is big, it is very convenient!
However, because not many options there is about to reach itch, minor adjustments, I think otherwise, and whether that will write a supplement (CSS or) scss.

