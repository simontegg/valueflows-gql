// Automatically created 
// until next.js gets CSS support
// https://github.com/zeit/next.js/issues/544

const css = `/*!
 * # Semantic UI 2.2.10 - Site
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);
body,
html {
  height: 100%
}
html {
  font-size: 14px
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 320px;
  background: #fff;
  font-family: "Open Sans","Helvetica Neue",Arial,Helvetica,sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0,0,0,.8);
  font-smoothing: antialiased
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Open Sans","Helvetica Neue",Arial,Helvetica,sans-serif;
  line-height: 1.28571429em;
  margin: 1em 0 1rem;
  font-weight: 700;
  padding: 0
}
h1 {
  min-height: 1rem;
  font-size: 2rem
}
h2 {
  font-size: 1.71428571rem
}
h3 {
  font-size: 1.28571429rem
}
h4 {
  font-size: 1.07142857rem
}
h5 {
  font-size: 1rem
}
h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child {
  margin-top: 0
}
h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child {
  margin-bottom: 0
}
p {
  margin: 0 0 1em;
  line-height: 1.4285em
}
p:first-child {
  margin-top: 0
}
p:last-child {
  margin-bottom: 0
}
a {
  color: #009fda;
  text-decoration: none
}
a:hover {
  color: #00b2f3;
  text-decoration: none
}
::-webkit-selection {
  background-color: #ffc;
  color: rgba(0,0,0,.8)
}
::-moz-selection {
  background-color: #ffc;
  color: rgba(0,0,0,.8)
}
::selection {
  background-color: #ffc;
  color: rgba(0,0,0,.8)
}
input::-webkit-selection,
textarea::-webkit-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.8)
}
input::-moz-selection,
textarea::-moz-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.8)
}
input::selection,
textarea::selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.8)
}
/*!
 * # Semantic UI 2.2.10 - Reset
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
*,
:after,
:before {
  box-sizing: inherit
}
html {
  box-sizing: border-box
}
input[type=email],
input[type=password],
input[type=search],
input[type=text] {
  -webkit-appearance: none;
  -moz-appearance: none
}
/*!
 * # Semantic UI 2.2.10 - Item
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
.ui.card,
.ui.cards > .card {
  max-width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: .28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;
  -webkit-transition: box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease,-webkit-transform .1s ease;
  z-index: ''
}
.ui.card {
  margin: 1em 0
}
.ui.card a,
.ui.cards > .card a {
  cursor: pointer
}
.ui.card:first-child {
  margin-top: 0
}
.ui.card:last-child {
  margin-bottom: 0
}
.ui.cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: -.875em -.5em;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}
.ui.cards > .card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: .875em .5em;
  float: none
}
.ui.card:after,
.ui.cards:after {
  display: block;
  content: ' ';
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden
}
.ui.cards ~ .ui.cards {
  margin-top: .875em
}
.ui.card > :first-child,
.ui.cards > .card > :first-child {
  border-radius: .28571429rem .28571429rem 0 0!important;
  border-top: none!important
}
.ui.card > :last-child,
.ui.cards > .card > :last-child {
  border-radius: 0 0 .28571429rem .28571429rem!important
}
.ui.card > :only-child,
.ui.cards > .card > :only-child {
  border-radius: .28571429rem!important
}
.ui.card > .image,
.ui.cards > .card > .image {
  position: relative;
  display: block;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 0;
  background: rgba(0,0,0,.05)
}
.ui.card > .image > img,
.ui.cards > .card > .image > img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: inherit
}
.ui.card > .image:not(.ui) > img,
.ui.cards > .card > .image:not(.ui) > img {
  border: none
}
.ui.card > .content,
.ui.cards > .card > .content {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border: none;
  border-top: 1px solid rgba(34,36,38,.1);
  background: 0 0;
  margin: 0;
  padding: 1em 1em;
  box-shadow: none;
  font-size: 1em;
  border-radius: 0
}
.ui.card > .content:after,
.ui.cards > .card > .content:after {
  display: block;
  content: ' ';
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden
}
.ui.card > .content > .header,
.ui.cards > .card > .content > .header {
  display: block;
  margin: '';
  font-family: Lato,Arial,Helvetica,sans-serif;
  color: rgba(0,0,0,.85)
}
.ui.card > .content > .header:not(.ui),
.ui.cards > .card > .content > .header:not(.ui) {
  font-weight: 700;
  font-size: 1.28571429em;
  margin-top: -.21425em;
  line-height: 1.28571429em
}
.ui.card > .content > .header + .description,
.ui.card > .content > .meta + .description,
.ui.cards > .card > .content > .header + .description,
.ui.cards > .card > .content > .meta + .description {
  margin-top: .5em
}
.ui.card [class*="left floated"],
.ui.cards > .card [class*="left floated"] {
  float: left
}
.ui.card [class*="right floated"],
.ui.cards > .card [class*="right floated"] {
  float: right
}
.ui.card [class*="left aligned"],
.ui.cards > .card [class*="left aligned"] {
  text-align: left
}
.ui.card [class*="center aligned"],
.ui.cards > .card [class*="center aligned"] {
  text-align: center
}
.ui.card [class*="right aligned"],
.ui.cards > .card [class*="right aligned"] {
  text-align: right
}
.ui.card .content img,
.ui.cards > .card .content img {
  display: inline-block;
  vertical-align: middle;
  width: ''
}
.ui.card .avatar img,
.ui.card img.avatar,
.ui.cards > .card .avatar img,
.ui.cards > .card img.avatar {
  width: 2em;
  height: 2em;
  border-radius: 500rem
}
.ui.card > .content > .description,
.ui.cards > .card > .content > .description {
  clear: both;
  color: rgba(0,0,0,.68)
}
.ui.card > .content p,
.ui.cards > .card > .content p {
  margin: 0 0 .5em
}
.ui.card > .content p:last-child,
.ui.cards > .card > .content p:last-child {
  margin-bottom: 0
}
.ui.card .meta,
.ui.cards > .card .meta {
  font-size: 1em;
  color: rgba(0,0,0,.4)
}
.ui.card .meta *,
.ui.cards > .card .meta * {
  margin-right: .3em
}
.ui.card .meta :last-child,
.ui.cards > .card .meta :last-child {
  margin-right: 0
}
.ui.card .meta [class*="right floated"],
.ui.cards > .card .meta [class*="right floated"] {
  margin-right: 0;
  margin-left: .3em
}
.ui.card > .content a:not(.ui),
.ui.cards > .card > .content a:not(.ui) {
  color: '';
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .content a:not(.ui):hover,
.ui.cards > .card > .content a:not(.ui):hover {
  color: ''
}
.ui.card > .content > a.header,
.ui.cards > .card > .content > a.header {
  color: rgba(0,0,0,.85)
}
.ui.card > .content > a.header:hover,
.ui.cards > .card > .content > a.header:hover {
  color: #1e70bf
}
.ui.card .meta > a:not(.ui),
.ui.cards > .card .meta > a:not(.ui) {
  color: rgba(0,0,0,.4)
}
.ui.card .meta > a:not(.ui):hover,
.ui.cards > .card .meta > a:not(.ui):hover {
  color: rgba(0,0,0,.87)
}
.ui.card > .button,
.ui.card > .buttons,
.ui.cards > .card > .button,
.ui.cards > .card > .buttons {
  margin: 0 -1px;
  width: calc(100% + 2px)
}
.ui.card .dimmer,
.ui.cards > .card .dimmer {
  background-color: '';
  z-index: 10
}
.ui.card > .content .star.icon,
.ui.cards > .card > .content .star.icon {
  cursor: pointer;
  opacity: .75;
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .content .star.icon:hover,
.ui.cards > .card > .content .star.icon:hover {
  opacity: 1;
  color: #ffb70a
}
.ui.card > .content .active.star.icon,
.ui.cards > .card > .content .active.star.icon {
  color: #ffe623
}
.ui.card > .content .like.icon,
.ui.cards > .card > .content .like.icon {
  cursor: pointer;
  opacity: .75;
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .content .like.icon:hover,
.ui.cards > .card > .content .like.icon:hover {
  opacity: 1;
  color: #ff2733
}
.ui.card > .content .active.like.icon,
.ui.cards > .card > .content .active.like.icon {
  color: #ff2733
}
.ui.card > .extra,
.ui.cards > .card > .extra {
  max-width: 100%;
  min-height: 0!important;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  border-top: 1px solid rgba(0,0,0,.05)!important;
  position: static;
  background: 0 0;
  width: auto;
  margin: 0 0;
  padding: .75em 1em;
  top: 0;
  left: 0;
  color: rgba(0,0,0,.4);
  box-shadow: none;
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .extra a:not(.ui),
.ui.cards > .card > .extra a:not(.ui) {
  color: rgba(0,0,0,.4)
}
.ui.card > .extra a:not(.ui):hover,
.ui.cards > .card > .extra a:not(.ui):hover {
  color: #1e70bf
}
.ui.raised.card,
.ui.raised.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)
}
.ui.link.cards .raised.card:hover,
.ui.link.raised.card:hover,
.ui.raised.cards a.card:hover,
a.ui.raised.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 4px 0 rgba(34,36,38,.15),0 2px 10px 0 rgba(34,36,38,.25)
}
.ui.raised.card,
.ui.raised.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)
}
.ui.centered.cards {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}
.ui.centered.card {
  margin-left: auto;
  margin-right: auto
}
.ui.fluid.card {
  width: 100%;
  max-width: 9999px
}
.ui.cards a.card,
.ui.link.card,
.ui.link.cards .card,
a.ui.card {
  -webkit-transform: none;
  transform: none
}
.ui.cards a.card:hover,
.ui.link.card:hover,
.ui.link.cards .card:hover,
a.ui.card:hover {
  cursor: pointer;
  z-index: 5;
  background: #fff;
  border: none;
  box-shadow: 0 1px 3px 0 #bcbdbd,0 0 0 1px #d4d4d5;
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px)
}
.ui.cards > .red.card,
.ui.red.card,
.ui.red.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #db2828,0 1px 3px 0 #d4d4d5
}
.ui.cards > .red.card:hover,
.ui.red.card:hover,
.ui.red.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #d01919,0 1px 3px 0 #bcbdbd
}
.ui.cards > .orange.card,
.ui.orange.card,
.ui.orange.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #f2711c,0 1px 3px 0 #d4d4d5
}
.ui.cards > .orange.card:hover,
.ui.orange.card:hover,
.ui.orange.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #f26202,0 1px 3px 0 #bcbdbd
}
.ui.cards > .yellow.card,
.ui.yellow.card,
.ui.yellow.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #fbbd08,0 1px 3px 0 #d4d4d5
}
.ui.cards > .yellow.card:hover,
.ui.yellow.card:hover,
.ui.yellow.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #eaae00,0 1px 3px 0 #bcbdbd
}
.ui.cards > .olive.card,
.ui.olive.card,
.ui.olive.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #b5cc18,0 1px 3px 0 #d4d4d5
}
.ui.cards > .olive.card:hover,
.ui.olive.card:hover,
.ui.olive.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #a7bd0d,0 1px 3px 0 #bcbdbd
}
.ui.cards > .green.card,
.ui.green.card,
.ui.green.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #21ba45,0 1px 3px 0 #d4d4d5
}
.ui.cards > .green.card:hover,
.ui.green.card:hover,
.ui.green.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #16ab39,0 1px 3px 0 #bcbdbd
}
.ui.cards > .teal.card,
.ui.teal.card,
.ui.teal.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #00b5ad,0 1px 3px 0 #d4d4d5
}
.ui.cards > .teal.card:hover,
.ui.teal.card:hover,
.ui.teal.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #009c95,0 1px 3px 0 #bcbdbd
}
.ui.blue.card,
.ui.blue.cards > .card,
.ui.cards > .blue.card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #2185d0,0 1px 3px 0 #d4d4d5
}
.ui.blue.card:hover,
.ui.blue.cards > .card:hover,
.ui.cards > .blue.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #1678c2,0 1px 3px 0 #bcbdbd
}
.ui.cards > .violet.card,
.ui.violet.card,
.ui.violet.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #6435c9,0 1px 3px 0 #d4d4d5
}
.ui.cards > .violet.card:hover,
.ui.violet.card:hover,
.ui.violet.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #5829bb,0 1px 3px 0 #bcbdbd
}
.ui.cards > .purple.card,
.ui.purple.card,
.ui.purple.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #a333c8,0 1px 3px 0 #d4d4d5
}
.ui.cards > .purple.card:hover,
.ui.purple.card:hover,
.ui.purple.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #9627ba,0 1px 3px 0 #bcbdbd
}
.ui.cards > .pink.card,
.ui.pink.card,
.ui.pink.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #e03997,0 1px 3px 0 #d4d4d5
}
.ui.cards > .pink.card:hover,
.ui.pink.card:hover,
.ui.pink.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #e61a8d,0 1px 3px 0 #bcbdbd
}
.ui.brown.card,
.ui.brown.cards > .card,
.ui.cards > .brown.card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #a5673f,0 1px 3px 0 #d4d4d5
}
.ui.brown.card:hover,
.ui.brown.cards > .card:hover,
.ui.cards > .brown.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #975b33,0 1px 3px 0 #bcbdbd
}
.ui.cards > .grey.card,
.ui.grey.card,
.ui.grey.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #767676,0 1px 3px 0 #d4d4d5
}
.ui.cards > .grey.card:hover,
.ui.grey.card:hover,
.ui.grey.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #838383,0 1px 3px 0 #bcbdbd
}
.ui.black.card,
.ui.black.cards > .card,
.ui.cards > .black.card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #1b1c1d,0 1px 3px 0 #d4d4d5
}
.ui.black.card:hover,
.ui.black.cards > .card:hover,
.ui.cards > .black.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #27292a,0 1px 3px 0 #bcbdbd
}
.ui.one.cards {
  margin-left: 0;
  margin-right: 0
}
.ui.one.cards > .card {
  width: 100%
}
.ui.two.cards {
  margin-left: -1em;
  margin-right: -1em
}
.ui.two.cards > .card {
  width: calc(50% - 2em);
  margin-left: 1em;
  margin-right: 1em
}
.ui.three.cards {
  margin-left: -1em;
  margin-right: -1em
}
.ui.three.cards > .card {
  width: calc(33.33333333% - 2em);
  margin-left: 1em;
  margin-right: 1em
}
.ui.four.cards {
  margin-left: -.75em;
  margin-right: -.75em
}
.ui.four.cards > .card {
  width: calc(25% - 1.5em);
  margin-left: .75em;
  margin-right: .75em
}
.ui.five.cards {
  margin-left: -.75em;
  margin-right: -.75em
}
.ui.five.cards > .card {
  width: calc(20% - 1.5em);
  margin-left: .75em;
  margin-right: .75em
}
.ui.six.cards {
  margin-left: -.75em;
  margin-right: -.75em
}
.ui.six.cards > .card {
  width: calc(16.66666667% - 1.5em);
  margin-left: .75em;
  margin-right: .75em
}
.ui.seven.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.seven.cards > .card {
  width: calc(14.28571429% - 1em);
  margin-left: .5em;
  margin-right: .5em
}
.ui.eight.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.eight.cards > .card {
  width: calc(12.5% - 1em);
  margin-left: .5em;
  margin-right: .5em;
  font-size: 11px
}
.ui.nine.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.nine.cards > .card {
  width: calc(11.11111111% - 1em);
  margin-left: .5em;
  margin-right: .5em;
  font-size: 10px
}
.ui.ten.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.ten.cards > .card {
  width: calc(10% - 1em);
  margin-left: .5em;
  margin-right: .5em
}
@media only screen and (max-width:767px) {
  .ui.two.doubling.cards {
    margin-left: 0;
    margin-right: 0
  }
  .ui.two.doubling.cards > .card {
    width: 100%;
    margin-left: 0;
    margin-right: 0
  }
  .ui.three.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.three.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.four.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.five.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.six.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.six.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.seven.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.seven.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.eight.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.nine.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.nine.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.ten.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.ten.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.two.doubling.cards {
    margin-left: 0;
    margin-right: 0
  }
  .ui.two.doubling.cards > .card {
    width: 100%;
    margin-left: 0;
    margin-right: 0
  }
  .ui.three.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.three.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.four.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.five.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.six.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.six.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.eight.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.eight.doubling.cards {
    margin-left: -.75em;
    margin-right: -.75em
  }
  .ui.eight.doubling.cards > .card {
    width: calc(25% - 1.5em);
    margin-left: .75em;
    margin-right: .75em
  }
  .ui.nine.doubling.cards {
    margin-left: -.75em;
    margin-right: -.75em
  }
  .ui.nine.doubling.cards > .card {
    width: calc(25% - 1.5em);
    margin-left: .75em;
    margin-right: .75em
  }
  .ui.ten.doubling.cards {
    margin-left: -.75em;
    margin-right: -.75em
  }
  .ui.ten.doubling.cards > .card {
    width: calc(20% - 1.5em);
    margin-left: .75em;
    margin-right: .75em
  }
}
@media only screen and (max-width:767px) {
  .ui.stackable.cards {
    display: block!important
  }
  .ui.stackable.cards .card:first-child {
    margin-top: 0!important
  }
  .ui.stackable.cards > .card {
    display: block!important;
    height: auto!important;
    margin: 1em 1em;
    padding: 0!important;
    width: calc(100% - 2em)!important
  }
}
.ui.cards > .card {
  font-size: 1em
}`
    
const Styles = (<style>{css}</style>)

export default Styles
