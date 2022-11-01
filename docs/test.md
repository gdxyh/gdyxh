## 这是一个测试页面

[Swimlanes.io 完整的语法概述](https://swimlanes.io/gallery/full-syntax)

```swimlanes-io
title: Simple example
A -> B: Ping
B --> A: Pong
```

<swimlanes-io>
title: 简单例子
A -> B: Ping
note:
```
{
    //这里是代码块
}
```
B --> A: Pong
</swimlanes-io>

### VEGA

[Vega官方文档](https://github.com/vega/vega-embed#options)

[Readme](https://jercarre.github.io/vega_docsify)

```vega
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "https://vega.github.io/vega-lite/data/us-10m.json",
    "format": {
      "type": "topojson",
      "feature": "counties"
    }
  },
  "transform": [{
    "lookup": "id",
    "from": {
      "data": {
        "url": "https://vega.github.io/vega-lite/data/unemployment.tsv"
      },
      "key": "id",
      "fields": ["rate"]
    }
  }],
  "projection": {
    "type": "albersUsa"
  },
  "mark": "geoshape",
  "encoding": {
    "color": {
      "field": "rate",
      "type": "quantitative"
    }
  }
}
```

### nomnoml renderSvg

[nomnoml renderSvg](https://mylesj.github.io/docsify-nomnoml/#/)

```nomnoml renderSvg
# direction: right
[<reference> theme | stroke: <color>; fill: <color>]
[docsify |
  [config] <:- [nomnoml]
]
[<abstract> nomnoml | title; class; width; height | render() |
  [<actor> ☺] -- [<instance> render]
]
[docsify] -> [nomnoml]
```

### JacobWeinbren

[该插件专注于基于@shoelace实现在Docsify中测试本地代码。](https://github.com/JacobWeinbren/docsify-demo)

```html preview
<p>Hello, World.</p>
```


### 测试支持codeblock-iframe语法 Test for codeblock-iframe syntax supporting in docsify

```iframe
height="600"
width="100%"
scrolling="no"
title="Zdog trefoil"
src="https://codepen.io/desandro/embed/XWNWPve?height=265&theme-id=light&default-tab=js,result"
frameborder="no"
loading="lazy"
allowtransparency="true"
allowfullscreen="true"
textContent="See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>."
```

<!-- ```iframe
height="600"
width="100%"
scrolling="no"
title="Zdog trefoil"
src="https://codepen.io/desandro/embed/XWNWPve?height=265&theme-id=light&default-tab=js,result"
frameborder="no"
loading="lazy"
allowtransparency="true"
allowfullscreen="true"
textContent="See the Pen <a href='https://codepen.io/desandro/pen/XWNWPve'>Zdog trefoil</a> by Dave DeSandro (<a href='https://codepen.io/desandro'>@desandro</a>) on <a href='https://codepen.io'>CodePen</a>."
``` -->

[filename](https://cdn.jsdelivr.net/npm/docsify-drawio/test.drawio ':include :type=code')
























<!-- slide:break -->

#

<swimlanes-io>
title: Swimlanes.io full syntax overview


_: **1. Messages**
One -> Two: Simple
Two ->> Three: Open arrow 
Three -x Four: Lost message

Three <-> Four: Bi-directional
Two -> Two: To self

Two -> One: Actors can be
One <- Two: in any order

Two -> Three: Regular
Two <-- Three: Dashed 
Two => Three: Bold

One -> Four: Markdown support for messages: *Italic*, **Bold**, ~~strike through~~ and `inline code`. + {fab-font-awesome} Icons



note: Add sequence numbers to messages with the _**autonumber**_ statement

// Uncomment next line for automatic message numbering
// autonumber



_: **2. Notes**

note:
Simple text formatting; **bold**, *italic*, ~~strike through~~ and `inline code`. + {fab-font-awesome} Icons

1. Ordered
2. list


* Unordered
* list

[link](http://www.swimlanes.io)

```
{
  code block..
}
```

Two -> Three: A note is closed by a following element

note: A note spans the length of the previoues message by default

note One, Three: Specify the start and end actor to change the width of a note
```
note [start[,end]]: text
```

_: **3. Sections**

if: Define conditional flows with _**if**_
  Two -> Three: Message
else: Optional alternative flow with _**else**_
  Two -> One: Message
else
  One <-> Four: Section lables are optional
  if: Sections can be nested one level
  end
    note One, Three: Sections are closed with the _**end**_ statement
end

group: _**group**_ can be used instead of _**if**_ for simple grouping

end


_: **4. Dividers**

_: thin

-: regular

--: dashed

=: bold

-: Markdown support for dividers: *Italic*, **Bold**, ~~strike through~~ and `inline code`. + {fab-font-awesome} Icons

_: **5. {fab-font-awesome fa-lg} Icons**

note: {far-bolt fa-lg} Font Awesome icons are supported using:
```
{fa$-icon}
```
Where **$** is:
- **b** for brand
- **s** for solid
- **r** for regular
- **l** for light
- **d** for duotone

See [Font Awesome overview](/gallery/font-awesome) for more details and [fontawesome.com](https://fontawesome.com/v5.10.1/icons?d=gallery) for a full list of available icons.

_: **6. Delay**

...: {fas-spinner} Indicate a delay in the flow



_: **7. Order**
note: Change the order of the actors with the _**order**_ statement

```
order: first [,second[,third ...]]
```

// Uncomment next line for re-ordering
// order: Three, Two
</swimlanes-io>

