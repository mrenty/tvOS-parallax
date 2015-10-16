# tvOS-parallax
A simple javascript plugin to recreate the tvOS parallax effect.

<a href="http://mrenty.com/sandbox/tvos-parallax/" target="_blank">DEMO</a>

### Usage

To initiate an element you simply can do
```javascript
element = new Card();
```

To apply the interaction to the element you can add the hover method and pass a custom integer to modify the slack of the animation.
```javascript
element.hover(e, CUSTOM_INT);
```

To reset the element use
```javascript
element.reset(e);
```

### Browser support

Works on Chrome, Safari and Firefox.

### License

The MIT License (MIT)

Copyright (c) 2015 Michiel Renty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.