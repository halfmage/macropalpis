![alt text](https://raw.githubusercontent.com/halfmage/macropalpis/master/macropalpis-logo.png "Macropalpis Logo")

# macropalpis
**v. 0.7** - A concept of ultra-shorthanded utility classes with mobile-first approach for css fixes and minimal css.

### Background Information
Paratarsotomus **macropalpis** is a species of mite. It is quite small — 0.7 mm — but has been recorded as the world's fastest land animal relative to body length. The mite has been recorded at a speed of 322 body lengths per second (0.225 metres per second (0.50 mph)). Source: [sciencedaily](www.sciencedaily.com/releases/2014/04/140427191124.htm) - [wikipedia](www.sciencedaily.com/releases/2014/04/140427191124.htm)

### Approaches and Goles
- CSS declarations as seperated class modules
- Super minimal, abstract and lazy naming convention
- Use of numeric/alphabetic suffixes (`ov ≠ o1`)
- Every module should be reusable, in every case
- Every module is mobile-first (min-width only)

### Implementation

To use macropalpis just clone the repository and place the macropalpis.css in your project. 
```html
<link rel="stylesheet" href="macropalpis.css">
```
Or use the super-lazy way and just copy the [macropalpis.css](https://raw.githubusercontent.com/halfmage/macropalpis/master/css/macropalpis.css) code from github raw code.

### Modules

**Background**
```SASS
bgc - background-color // bgc-red, bgc-blue, bgc-yellow
bgp - background-position // bgp, bgpt, bgpb
bgs - background-size // bgsv, bgsn
bgr - background-repeat // bgrn, bgr, bgrx, bgry
```
**Font**
```SASS
ff - font-family // ffs, ffss, ffm
fz - font-size // fz1, fz2, fz3, fz4
fs - font-style	// fsn, fsi
fw - font-weight // fwn, fwb, fwl
```
**Text**
```SASS
c  - color // c-red, c-blue, c-yellow
ls - letter-spacing	// ls0, ls1, ls2, ls3, ls4
lh - line-height // lh0, lh1, lh2, lh3, lh4
ta - text-align // tal, tra, tac, taj
td - text-decoration // tdn, tdu, tdt
ti - text-indent // ti0, ti1
tt - text-transform	// ttn, ttu, ttl
va - vertical-align	// vat, vam, vab
ws - white-space // wsn, wsc, wsnw
tsh - text-shadow // tshn, tsh1, tsh2
```
**BORDER**
```SASS
bw - border-width // bwn, bw1, bw2, bw3, bw4 
bs - border-style // bsn, bss, bsds, bsdt, bsdb
bc - border-color // bc-red, bc-blue, bc-yellow
br - border-radius // brn, br1, br2, br3, br4 
```
**Margin**
```SASS
m  - margin // m0, mt0, mr0, mb0, ml0, mc
```
**Padding**
```SASS
p  - padding // p0, pt0, pr0, pb0, pl0
```
**List**
```SASS
lsp - list-style-position // lspi, lspo
lss - list-style-type // lssn, lsss, lssc
```
**Position**
```SASS
p - positon // ps, pr, pa, pf
	t - top // t0, t1, t2, t3, t4
	r - right // r0, r1, r2, r3, r4
	b - bottom // b0, b1, b2, b3, b4
	l - left // l0, l1, l2, l3, l4
d - display // dn, db, dib, di
f - float // fn, fl, fr
v - visibility // vv, vh
o - overflow // oa, ov, ovx, ovy, oh, ohx, ohy
z - z-index // z0, z1, z2, z3, z4
o - opacity // o0, o5, o75, o100
cl - clear // cln, cll, clr, clb
bsh - box-shadow // bshn, bsh1, bsh2, bsh3, bsh4 

w - width // w0, w20, w25, w33, w40, w50, w60, w75, w80, w100
m - max-width // mw0, mw50, mw100, mwbp
h - height // h0, h25, h50, h75, h100
```
**User Interface**
```SASS
cr - cursor	// crn, crd, crp
```
**Breakpoint Suffix**
```SASS
--s //  small
--m //  medium 
--l //  large
```