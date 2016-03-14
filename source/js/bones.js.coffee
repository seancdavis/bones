# ---------------------------------------- Base

class Bones

  constructor: ->
    new Bones.Menu
    new Bones.Links

# ---------------------------------------- Menu

class Bones.Menu

  constructor: ->
    $('._menu-trigger').click(@toggleMenu)

  toggleMenu: (e) ->
    e.preventDefault()
    menu = $("##{$(e.target).attr('data-menu')}")
    menu.toggleClass('active') if menu.length > 0

# ---------------------------------------- Links

class Bones.Links

  initialize: ->
    @disabledLinks()
    @externalLinks()

  disabledLinks: ->
    $('a.disabled').on 'click', (e) ->
      e.preventDefault()

  externalLinks: ->
    for link in $('a')
      if @isExternal($(link).attr('href'))
        $(link).attr('target','_blank')

  isExternal: (url) ->
    match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/)
    if (typeof match[1] == "string" && match[1].length > 0 && match[1].toLowerCase() != location.protocol)
      return true
    if (typeof match[2] == "string" && match[2].length > 0 && match[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"), "") != location.host)
      return true
    false

# ---------------------------------------- Initialize

$ ->
  new Bones
