# CS 260 Notes

[My startup - Liar's Dice](https://startup.liarsdice.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

- Tech stack overview
    - react - frontend
    - caddy 2 - routing of requests
    - node js - what app runs on
    - mongo DB - database
- DNS request, it returns IP, user goes to website
- terminal commands
    - 'dig byu.edu' : all DNS records
        - 'dig byu.edu +short'
    - 'whois byu.edu' : information
    - 'nslookup byu.edu' : different IP addresses
- domain name
    - [subdomain.]*secondary.top
    - top level domains
        - originals, country, generic
    - react.simon.cs260.click
- localhost (127.0.0.1)
- DNS record type
    - A/AAAA name: IPV4/IPV6
    - CNAME - canonical name/alias
- EC2 to initialize server instance
- Route 53 to register domain and map it to server

## Caddy

- modify caddyfile in server to domain name
- sudo service caddy restart
- Update domains as specifed in [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

#### HTML intro

- comments are &lt;!-- here --&gt;
- main html file named 'index.html'

| Element | Meaning                                                          |
| ------- | ---------------------------------------------------------------- |
| html    | The page container                                               |
| head    | Header information                                               |
| title   | Title of the page                                                |
| meta    | Metadata for the page such as character set or viewport settings |
| script  | JavaScript reference (external or inline)                        |
| include | External content reference                                       |
| body    | The entire content body of the page                              |
| header  | Header of the main content                                       |
| footer  | Footer of the main content                                       |
| nav     | Navigational inputs                                              |
| main    | Main content of the page                                         |
| section | A section of the main content                                    |
| aside   | Aside content from the main content                              |
| div     | A block division of content                                      |
| span    | An inline span of content                                        |
| h<1-9>  | Text heading (h1 highest → h9 lowest)                            |
| p       | A paragraph of text                                              |
| b       | Bring attention                                                  |
| table   | Table                                                            |
| tr      | Table row                                                        |
| th      | Table header                                                     |
| td      | Table data                                                       |
| ol, ul  | Ordered or unordered list                                        |
| li      | List item                                                        |
| a       | Anchor the text to a hyperlink                                   |
| img     | Graphical image reference                                        |
| dialog  | Interactive component such as a confirmation                     |
| form    | A collection of user input                                       |
| input   | User input field                                                 |
| audio   | Audio content                                                    |
| video   | Video content                                                    |
| svg     | Scalable vector graphic content                                  |
| iframe  | Inline frame of another HTML page                                |

#### Structure

- body has three children, a header, main, and footer
- body, header, footer, main, section, aside, p, table, ol/ul, div, and span

#### Input

| Element  | Meaning                          | Example                                        |
| -------- | -------------------------------- | ---------------------------------------------- |
| form     | Input container and submission   | `<form action="form.html" method="post">`      |
| fieldset | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| input    | Multiple types of user input     | `<input type="" />`                            |
| select   | Selection dropdown               | `<select><option>1</option></select>`          |
| optgroup | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| option   | Selection option                 | `<option selected>option2</option>`            |
| textarea | Multiline text input             | `<textarea></textarea>`                        |
| label    | Individual input label           | `<label for="range">Range: </label>`           |
| output   | Output of input                  | `<output for="range">0</output>`               |
| meter    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range-limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | Button to trigger form submission |

| Attribute | Meaning                                                              |
| --------- | -------------------------------------------------------------------- |
| name      | The name of the input; submitted as the input’s identifier in a form |
| disabled  | Disables user interaction with the input                             |
| value     | The initial value of the input                                       |
| required  | Indicates that a value is required for validity                      |

- pattern : provides a regular expression that must match for the input to be considered as valid

#### Media

| Element | Description                                                                         |
| ------- | ----------------------------------------------------------------------------------- |
| img     | Simple reference to an external image file                                          |
| audio   | Simple reference to an external audio file                                          |
| video   | Simple reference to an external video file                                          |
| svg     | Contains code to render a scalable visual image; can be animated                    |
| canvas  | Script-driven drawing surface that contains code to render visuals; can be animated |

- Image
    - should also include an `alt` attribute that describes the image
- Audio
    - `controls` attribute if you want the user to be able to control the audio playback
    - do not display the controls = no visual representation of the audio on page
    - `autoplay` attribute starts the audio playing as soon as the audio file is loaded
    - `loop` attribute loops it repeatedly
- Video
    - can include the controls or autoplay attributes
    - may need to include the crossorigin="anonymous" attribute if you are requesting files from a different domain than the one serving your content
- Internal media
    - `svg` and `canvas` allow you to create images directly within your HTML

## CSS

- missed day 1

#### Responsive Design
- &lt;meta name="viewport" /&gt;
- float:right
- display:grid
    - grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    - grid-auto-rows: 300px
    - grid-gap
- display:flex
    - make layout flexible for children
    - in child css:
        - flex: grow, shrink, basis
        - grow: behavior with extra room
        - shrink: behavior with not enough room
        - basis: default size
    - flex-direction: row or column
    - justify-content: center
    - align-items: center
- @media
    - orientation: portrait
        - set css rules for portrait viewport
    - max-height: 500px

#### CSS Frameworks
- import bootstrap
- give items bootstrap classes

## React Part 1: Routing

#### Javascript

- intro
    - `const msg = "Hello World";`
        - can't be changed
    - `let msg = Hello World";`
        - can be changed
    - `1 + "cow"` = `1cow`
        - turn ints into strings
- objectref.methodcall
    - `console.log("Hello" + " " + "World")` - print to console
    - `document.body.innerHTML = 'cow'` - print cow on page
- function
    - function join(a,b) {
        return a + b;
    }
- arrays
    - array.forEach((item)) => console.log(item)
- look at count func in slides
- sources tab on chrome - can put breakpoints in js code
- Node.js
    - js run in console
- npm package manager
    - npm install -y

#### React
- JSX - combining javascript and html
    - `const x = <p id='2'>text {1+1}</p>`
- Components
    - define
        - `const Hello = () => { return jsx }`
    - use
        - `const root = ...`
        - `root.render(<Hello />)`
- Properties
    - destructure the prop object
    - (props) -> props.phrase
    - {phrase, say} -> {phrase} {say}
    - pull only the parameters you need
- Component State
    - do codepen
- Router
    - allows for single page application
- package.json
    - "dev": vite;
    - npm run dev

- [React Routing Tutorial](https://github.com/webprogramming260/webprogramming/blob/main/instruction/simon/simonReact/simonReactP1.md)

## React Part 2: Reactivity


