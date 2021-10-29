import { css } from 'frontity'

export default css`
/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+docker+json+python+jsx+yaml&plugins=line-highlight+line-numbers+command-line */
/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */
pre {
padding: 1em;
margin: .5em 0;
overflow: auto;
border-radius: 0.3em;
background-color: #272822;
-webkit-box-shadow: 8px 10px 8px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 10px 8px 0px rgba(0,0,0,0.75);
box-shadow: 8px 10px 8px 0px rgba(0,0,0,0.75);
}

code[class*="language-"],
pre[class*="language-"] {
color: #f8f8f2;
background: none;
text-shadow: 0 1px rgba(0, 0, 0, 0.3);
font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
font-size: 1em;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
word-wrap: normal;
line-height: 1.5;

-moz-tab-size: 4;
-o-tab-size: 4;
tab-size: 4;

-webkit-hyphens: none;
-moz-hyphens: none;
-ms-hyphens: none;
hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
padding: 1em;
margin: .5em 0;
overflow: auto;
border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
padding: .1em;
border-radius: .3em;
white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
color: #8292a2;
}

.token.punctuation {
color: #f8f8f2;
}

.token.namespace {
opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
color: #f92672;
}

.token.boolean,
.token.number {
color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
color: #e6db74;
}

.token.keyword {
color: #66d9ef;
}

.token.regex,
.token.important {
color: #fd971f;
}

.token.important,
.token.bold {
font-weight: bold;
}
.token.italic {
font-style: italic;
}

.token.entity {
cursor: help;
}

pre[data-line] {
position: relative;
padding: 1em 0 1em 3em;
}

.line-highlight {
position: absolute;
left: 0;
right: 0;
padding: inherit 0;
margin-top: 1em; /* Same as .prism’s padding-top */

background: hsla(24, 20%, 50%,.08);
background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));

pointer-events: none;

line-height: inherit;
white-space: pre;
}

@media print {
.line-highlight {
/*
 * This will prevent browsers from replacing the background color with white.
 * It's necessary because the element is layered on top of the displayed code.
 */
-webkit-print-color-adjust: exact;
color-adjust: exact;
}
}

.line-highlight:before,
.line-highlight[data-end]:after {
content: attr(data-start);
position: absolute;
top: .4em;
left: .6em;
min-width: 1em;
padding: 0 .5em;
background-color: hsla(24, 20%, 50%,.4);
color: hsl(24, 20%, 95%);
font: bold 65%/1.5 sans-serif;
text-align: center;
vertical-align: .3em;
border-radius: 999px;
text-shadow: none;
box-shadow: 0 1px white;
}

.line-highlight[data-end]:after {
content: attr(data-end);
top: auto;
bottom: .4em;
}

.line-numbers .line-highlight:before,
.line-numbers .line-highlight:after {
content: none;
}

pre[id].linkable-line-numbers span.line-numbers-rows {
pointer-events: all;
}
pre[id].linkable-line-numbers span.line-numbers-rows > span:before {
cursor: pointer;
}
pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
background-color: rgba(128, 128, 128, .2);
}

pre[class*="language-"].line-numbers {
position: relative;
padding-left: 3.8em;
counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
position: relative;
white-space: inherit;
}

.line-numbers .line-numbers-rows {
position: absolute;
pointer-events: none;
top: 0;
font-size: 100%;
left: -3.8em;
width: 3em; /* works for line-numbers below 1000 lines */
letter-spacing: -1px;
border-right: 1px solid #999;

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

}

.line-numbers-rows > span {
display: block;
counter-increment: linenumber;
}

.line-numbers-rows > span:before {
content: counter(linenumber);
color: #999;
display: block;
padding-right: 0.8em;
text-align: right;
}

.command-line-prompt {
border-right: 1px solid #999;
display: block;
float: left;
font-size: 100%;
letter-spacing: -1px;
margin-right: 1em;
pointer-events: none;

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.command-line-prompt > span:before {
color: #999;
content: ' ';
display: block;
padding-right: 0.8em;
}

.command-line-prompt > span[data-user]:before {
content: "[" attr(data-user) "@" attr(data-host) "] $";
}

.command-line-prompt > span[data-user="root"]:before {
content: "[" attr(data-user) "@" attr(data-host) "] #";
}

.command-line-prompt > span[data-prompt]:before {
content: attr(data-prompt);
}
`
