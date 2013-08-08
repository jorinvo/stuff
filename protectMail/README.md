# protectMail
protect email addresses from spam bots and have them look normal


##  __Examples:__


## 1. Generate href-attribute and replace content

```html
<a id="selector" data-name="joe" data-host="fbi" data-ending="com"></a>

$('#selector').protectMail();

=>

<a id="selector" data-name="joe" data-host="fbi" data-ending="com" href="joe@fbi.com">joe@fbi.com</a>
```


## 2. Works for multi-selectors too

```html
<a class="selector" data-name="joe" data-host="fbi" data-ending="com"></a>
<a class="selector" data-name="phil" data-host="cia" data-ending="com"></a>

$('.selector').protectMail();

=>

<a class="selector" data-name="joe" data-host="fbi" data-ending="com" href="joe@fbi.com">joe@fbi.com</a>
<a class="selector" data-name="phil" data-host="cia" data-ending="com" href="phil@cia.com">phil@cia.com</a>
```


## 3. Only generate href-attribute

```html
<a id="selector" data-name="joe" data-host="fbi" data-ending="com">my custom content</a>

$('#selector').protectMail({ content: false });

=>

<a id="selector" data-name="joe" data-host="fbi" data-ending="com" href="joe@fbi.com">my custom content</a>
```


## 4. Only replace content

```html
<span id="selector" data-name="joe" data-host="fbi" data-ending="com"></span>

$('#selector').protectMail({ href: false });

=>

<span id="selector" data-name="joe" data-host="fbi" data-ending="com">joe@fbi.com</span>
```
