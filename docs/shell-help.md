# Help

## Introduction

### (Introduction)

#### What is Shell?

**Shell** is a extensions of Windows File Explorer that can be used to create high-performance context menu items. and gives user a high level of control over context menu of Windows File Explorer.

The Right Click Menu or the Context Menu is the menu, which appears when you right-click on the desktop, file, folder or taskbar in Windows. This menu gives you added functionality by offering you actions you can take with the item

**Shell** is all you need to customize or add new items with several functions to Windows File Explorer Context menu and Much More.(cascade menus, advanced menus, multi-level menus, command menus, separator).

![image](https://nilesoft.org/images/docs/goto.png)

#### Why Use Shell

- Is portable, fun and easy to learn!.
- Small installation file.
- Clean and simple user interface.
- Configuration in plain text.
- Quick loading.
- Minimal resource usage.
- No limitations.
- Embedded expressions syntax.
- Built-in functions and predefined variables.
- Multiple sources of images (embedded icons, image files, glyphs and colors).
- Dynamic search and filter.
- Support Taskbar context menu.
- Full management of the context menu.

## Installation

### (Installation)

Download the release package and unzip its content in any location you want.

Open an elevated command prompt.

Administrative permissions required for installation

#### Command-Line Help

`shell -[options]`

#### Options

|Options||
|:- |:- |
|`-register (-r)`|Registering.|
|`-unregister (-u)`|Unregistering.|
|`-init (-i)`|Initialize image cache.|
|`-restart (-re)`|Restart Windows Explorer.|
|`-silent (-s)`|Prevents displaying messages.|
|`-?`|Display this help message.|

#### Install

`shell -register -init`

#### Uninstall

`shell -unregister -restart`

> *Tip: Close all instances of Windows File Explorer before uninstalling to avoid needing a reboot after it (Shell) has been uninstalled.*

#### Use the following keys to enable/disable

These keys are used when you press or press + key `sright-click ShiftF10`

`CTRL` To enable and reload the configuration file "shell.shl"
To make priority to the modern context menu for Windows 11
+To disable Shell and Enable Classic Context Menu
To reload the configuration file "shell.shl"`WIN CTRL WIN RIGHT-CLICK + LEFT-CLICK`

## Get Started

### (Get Started)

This tutorial will teach you the basics of **Shell**.
It is not necessary to have any prior experience.

To start using **Shell**, you need:
A text editor, like Notepad, to write **Shell** code.

#### Quickstart

Let's create our first menu item.

Open configuration file (shell.shl) and Write the following code and save.

```
shell
{
    dynamic
    {
        item(title='Hello, World!')
    }
}
```

Don't worry if you don't understand the code above - we will discuss it in detail in later chapters.

The result will look something for this when you press the right-click in an empty place on the desktop:

![image](https://nilesoft.org/images/docs/helloworld.png)

**Congratulations** You have now added the first time a menu item to the context menu

## Syntax

### (Syntax)

#### Syntax Rules for Configuration Files

This chapter describes the syntax rules for configuration file.

- Syntax are not case sensitive.
- Spaces around the equal () sign are optional and are ignored.=
- The properties of static and dynamic items are separated by blank spaces or on a separate line and must be placed in parentheses .( )
- variable are optional.
- default are optional.
- Static items are optional.
- Static items have one type: item.
- Dynamic items are optional.
- Dynamic items have three types: menu, item, and separator(sep).

> *Tip: When there is an error, it is recorded in the log file (shell.log).*

The following rules apply to the syntax of configuration file (shell.shl):

#### shell.shl structure

```
shell 
{
    // global variables
    var // variables 
    {
        // variables content
        variable-name = variable-value
        ...
    }
	
    default // def or settings
    {
        // defaults content
        default-name = default-value
        default-name = [default-value, default-value, ...]
        ...
    }
	
    // static items
    static
    {
        // static items content
        item ( property-name = property-value   ... )
        ...
    }

    // dynamic items
    dynamic
    {
        // dynamic items content
        item ( property-name = property-value   ... )
        
        separator [( property-name = property-value   ... )]
        
        menu ( property-name = property-value   ... )
        {
           var // local variables
           {
                variable-name = variable-value
                ...
            }
            
            item ( property-name = property-value   ... )
            ...
        }
        ...
    }
}
```

#### Breaking Long Lines

For best readability, users often like to avoid lines longer than 80 characters. single quotes also allow break up a line.

```
shell 
{
    dynamic
    {
	  item(title='Command prompt'
	        cmd='cmd.exe')
    }
}
```

### Variables

Variables are containers for storing data values.

- Global and local variables are optional.
- To declare more than one variable, use a space.

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits and underscores ()._
- Names must begin with a letter.
- Names cannot contain whitespaces or special characters like !, #, %, etc.
- Reserved words (like keywords, such as null, true, false, etc.) cannot be used as names.
- Variables can be placed in globle variables, or in the dynamic body section of an menu, or in both.

All variables must be identified with unique names.
These unique names are called identifiers. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

Note: It is recommended to use descriptive names in order to create understandable and maintainable code

#### Example

```
shell 
{
    var
    {
        hello_world = 'Hello World!'
        test_add1 = 5 + 6
    }
	
    dynamic
    {
	  item(title = @hello_world cmd = @msg(hello_world))

	  menu(title = @test_add1)
	  {
	      var
	      {
	          test_sub1 = 11 - 5
	      }
	      
	      item(title = @test_sub1)
	  }
    }
}
```

### Default

Default are containers for storing default values.

```
shell 
{
    default
    {
        // view = auto, compact, small, medium, large, wide
        view = view.compact

        // theme = auto, dark, light, white, black, modern, modern_light, modern_dark
        theme = theme.modern

        // border size value from 0 to 10
        frame = 1
        // or
        frame // border
        {
            // border size value from 0 to 10
            size = 1

            color = #2c2c2c

            // opacity value from 0 to 100
            opacity = 20

            // radius size value from 0 to 3
            radius = 1

            padding = [0, 4, 0, 4]
        }

        // shadow size value from 0 to 10
        shadow = 1
        // or
        shadow
        {
            // shadow size value from 0 to 10
            size = 1

            // opacity value from 0 to 100
            opacity = 50

            color = #000
        }

        item
        {
            // text = [normal, selected]
            text = [#fff, #fff]
        
            // back = [normal, selected]
            back = [#2c2c2c, #3c3c3c]
        
            // radius size value from 0 to 3
            radius = 1

            margin = [4, 0]

            padding = [8, 4]
        }
        
        separator = #202020
        // or
        separator // sep
        {
            color = #202020
        
            size = 1
        
            margin = [8, 2]
        }
	
        // symbol = [normal, selected]
        symbol = [#f00, #800]
        // or
        symbol
        {
            // sub = [normal, selected]
            sub = [#f00, #800]

            // checked = [normal, selected]
            checked = [#0f0, #080]
        
            // radio = [normal, selected]
            radio = [#00f, #008]
        }

        image
        {
            gap = 8
            size = 16
            color = #ffff
        }

        tip = true
        // or
        tip
        {
            enabled = true

            // normal = [background, text]
            normal = [default, default]

            // normal = [background, text]
            primary = [#000, #fff]

            // info = [background, text]
            info = [#88f, #fff]

            // success = [background, text]
            success = [#8f8, #fff]

            // warning = [background, text]
            warning = [#ff8, #fff]

            // danger = [background, text]
            danger = [#f88, #fff]

            // max width value from 200 to 2000
            width = 400

            // opacity value from 0 to 100
            opacity = 100

            // radius size value from 0 to 3
            radius = 1

            time = 1.5

            padding = [8, 4]
        }
        
        // show menu delay value from 0 to 4000
        showdelay = 200

        // font = [size, font name]
        font = [12, 'Brush Script']
    }
}
```

#### Padding and Margin value syntax

Use the padding shorthand property with four values:

`padding = [1, 2, 3, 4]`

```
left = 1
right = 2
top = 3
bottom = 4
```

Use the padding shorthand property with two values:

`padding = [4, 2]`

```
left = 4
right = 4
top = 2
bottom = 2
```

Use the padding shorthand property with one value:

`padding = 4`

```
left = 4
right = 4
top = 4
bottom = 4
```

### Static

#### Static Items

This section modifies context menu items added by the system or by a third party. more than one item can be added with some properties to customize the context menu. explained below in more details.
The items must have the property . to search in the titles of the menu items to catches them and customize by other properties such as changing the title, icon, visibility, or moving it to another location.`find`

In the following example, it shows how to write add an items to static:

```
shell 
{
    static
    {
        item(find = 'copy'image = #00ff00)
        item(find = 'paste' image = #0000ff)
    }
}
```

#### Properties

|**Property**|**Summary**|
|:- |:- |
|Where|Allow menu item to be passed if a true value is returned<br>Default = `true`|
|Find|Accept menuitem when the specific menuitem title is contains or equal to the current find property.<br>Use this delimiter to separate patterns.`|`<br><font color="Red">This property must be included with another property at least if where property is not defined.</font> <br>Default = `null`<br>**Syntax**<br>find = 'undo' Find any word contains "undo"<br>find = '"undo"' Match whole word only<br>find = '*undo' Find a word that ends with<br>find = 'undo*' Find a word that starts with<br><br>find = '!undo' Find any word not contains "undo"<br>find = '!"undo"' Search for any word not equal to "undo"<br>find = '!*undo' Find a word that not ends with<br>find = 'undo*!' Find a word that starts with<br><br>find = 'undo delete|undo copy' Find an equal title for "undo delete" or "undo copy"|
|Title|Change value indicating the caption of the menuitem.<br>Default = `null`|
|Mode|Accept item by selections behavior. Value have one of the following parameters:<br>`Mode Table`<br>Default = `single`|
|Visibility<br>(vis)|Visibility of menuitem and can have one of the following parameters:.<br>`Visibility Table`<br>Default = `normal`|
|Position<br>(pos)|The position at which a menuitem should be inserted into the menu.<br>Position can have one of the following parameters:<br>`Position Table`<br>Default = `auto`|
|Separator<br>(sep)|Add separator with menuitem position by parameters:<br>`Separator Table`<br>Default = `none`|
|Image|The icon that appears in a menuitem, This property can be assigned as image files, resource icons, glyph or color. With one of the following parameters<br>`Image Table`<br>Default = `null`|
|Parent|Move current menu item(s) to another menu.<br>Default = `null`|
|Keys|Show keyboard shortcuts.<br>Default = `null`|
|Tip|Show a tip for the current item<br>Default = `null`<br>**Syntax**<br>`tip = "Lorem Ipsum is simply dummy text."`<br>`tip = ["Lorem Ipsum is simply dummy text.", tip.info]`<br>`tip = ["Lorem Ipsum is simply dummy text.", tip.info, 1.2]`|
|Default|Specifies that the menuitem is the default. A menu can contain only one default menuitem, which is displayed in bold.<br>Default = `false`|

|Mode Table||
|:- |:- |
|`None`|Accept item when there are no selections.|
|`Single`|Accept menuitem when there are single selection.|
|`MultiUnique`|Accept when multiple selections are single type.|
|`MultiSingle`|Accept when multiple selections are single file extension.|
|`Multiple`|Accept all types.|

|Visibility Table||
|:- |:- |
|`Hidden`|Hide the menuitem.|
|`Normal`|Enabled the menuitem.|
|`Disable`|Disabled the menuitem.|
|`Extended`|The menuitem appears when the key is pressed.`Shift`|
|`ExtendedHidden`|Hide the menuitem when the key is pressed.`Shift`|
|`ExtendedDisable`|The item appears disabled when the key is pressed.`Shift`|

|Position Table||
|:- |:- |
|`Auto`|Insert the menuitem to the current position.|
|`Middle`|Insert the menuitem to the middle of the menu.|
|`Top`|Insert the menuitem to the top of the menu.|
|`Bottom`|Insert the menuitem to the bottom of the menu.|
|`Number sets`|Insert the menuitem to a specified position with integer numbers.|

|Separator Table||
|:- |:- |
|`None`|Not adding a separator with the menuitem.|
|`Before`|Add a separator before the menuitem.|
|`After`|Add a separator after the menuitem.|
|`Both`|Add a separator before and after the menuitem.|

|Image Table||
|:- |:- |
|`Null`|Show menuitem without icon.|
|`Inherit`|Inheriting the image from the parent.|
|`Glyph`|Assign image as Glyph.|
|`Color`|Assign image as color.|
|`Path`|Assign image from location path or resource icon.|

### Dynamic

#### Dynamic Items

This section adds new menu items to the context menu.

Dynamic items have three types (menu, item, and separator). with properties to add new items with customization explained below in more details.
The types (menu and item) must contain the property title at least and their value cannot be `null`.
A separator-type item can be added without any properties.

In the following example, it shows how to write add an items to dynamic:

```
shell 
{
    dynamic
    {
        item(title = 'Hello, World!')
        separtor
        menu(title = 'sub menu' image = #0000ff)
        {
            item(title = 'test subitem')
        }
    }
}
```

#### Properties

编辑未完成https://nilesoft.org/docs/syntax/dynamic

|Property|Summary|
|:- |:- |
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||

## Expressions

### Comments

### String literal

### Numeric literal

### Color literal

### Operators

### Identifier

## Functions

### app

### appx

### color

### image

### id

### this

### io

### key

### msg

### path

### reg

### sel

### str

### sys

### user

## Examples

### Copy path

### Favorites

### Goto
