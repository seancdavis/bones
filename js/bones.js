var Bones;

Bones = (function() {
  function Bones() {
    new Bones.Menu;
    new Bones.Links;
  }

  return Bones;

})();

Bones.Menu = (function() {
  function Menu() {
    $('._menu-trigger').click(this.toggleMenu);
  }

  Menu.prototype.toggleMenu = function(e) {
    var menu;
    e.preventDefault();
    menu = $("#" + ($(e.target).attr('data-menu')));
    if (menu.length > 0) {
      return menu.toggleClass('active');
    }
  };

  return Menu;

})();

Bones.Links = (function() {
  function Links() {}

  Links.prototype.initialize = function() {
    this.disabledLinks();
    return this.externalLinks();
  };

  Links.prototype.disabledLinks = function() {
    return $('a.disabled').on('click', function(e) {
      return e.preventDefault();
    });
  };

  Links.prototype.externalLinks = function() {
    var i, len, link, ref, results;
    ref = $('a');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      link = ref[i];
      if (this.isExternal($(link).attr('href'))) {
        results.push($(link).attr('target', '_blank'));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Links.prototype.isExternal = function(url) {
    var match;
    match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
    if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) {
      return true;
    }
    if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":(" + {
      "http:": 80,
      "https:": 443
    }[location.protocol] + ")?$"), "") !== location.host) {
      return true;
    }
    return false;
  };

  return Links;

})();

$(function() {
  return new Bones;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbmVzLXRtcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsSUFBQTs7QUFBTTtFQUVTLGVBQUE7SUFDWCxJQUFJLEtBQUssQ0FBQztJQUNWLElBQUksS0FBSyxDQUFDO0VBRkM7Ozs7OztBQU1ULEtBQUssQ0FBQztFQUVHLGNBQUE7SUFDWCxDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxLQUFwQixDQUEwQixJQUFDLENBQUEsVUFBM0I7RUFEVzs7aUJBR2IsVUFBQSxHQUFZLFNBQUMsQ0FBRDtBQUNWLFFBQUE7SUFBQSxDQUFDLENBQUMsY0FBRixDQUFBO0lBQ0EsSUFBQSxHQUFPLENBQUEsQ0FBRSxHQUFBLEdBQUcsQ0FBQyxDQUFBLENBQUUsQ0FBQyxDQUFDLE1BQUosQ0FBVyxDQUFDLElBQVosQ0FBaUIsV0FBakIsQ0FBRCxDQUFMO0lBQ1AsSUFBOEIsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUE1QzthQUFBLElBQUksQ0FBQyxXQUFMLENBQWlCLFFBQWpCLEVBQUE7O0VBSFU7Ozs7OztBQU9SLEtBQUssQ0FBQzs7O2tCQUVWLFVBQUEsR0FBWSxTQUFBO0lBQ1YsSUFBQyxDQUFBLGFBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxhQUFELENBQUE7RUFGVTs7a0JBSVosYUFBQSxHQUFlLFNBQUE7V0FDYixDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsU0FBQyxDQUFEO2FBQzFCLENBQUMsQ0FBQyxjQUFGLENBQUE7SUFEMEIsQ0FBNUI7RUFEYTs7a0JBSWYsYUFBQSxHQUFlLFNBQUE7QUFDYixRQUFBO0FBQUE7QUFBQTtTQUFBLHFDQUFBOztNQUNFLElBQUcsSUFBQyxDQUFBLFVBQUQsQ0FBWSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLE1BQWIsQ0FBWixDQUFIO3FCQUNFLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixFQUFzQixRQUF0QixHQURGO09BQUEsTUFBQTs2QkFBQTs7QUFERjs7RUFEYTs7a0JBS2YsVUFBQSxHQUFZLFNBQUMsR0FBRDtBQUNWLFFBQUE7SUFBQSxLQUFBLEdBQVEsR0FBRyxDQUFDLEtBQUosQ0FBVSw0REFBVjtJQUNSLElBQUksT0FBTyxLQUFNLENBQUEsQ0FBQSxDQUFiLEtBQW1CLFFBQW5CLElBQStCLEtBQU0sQ0FBQSxDQUFBLENBQUUsQ0FBQyxNQUFULEdBQWtCLENBQWpELElBQXNELEtBQU0sQ0FBQSxDQUFBLENBQUUsQ0FBQyxXQUFULENBQUEsQ0FBQSxLQUEwQixRQUFRLENBQUMsUUFBN0Y7QUFDRSxhQUFPLEtBRFQ7O0lBRUEsSUFBSSxPQUFPLEtBQU0sQ0FBQSxDQUFBLENBQWIsS0FBbUIsUUFBbkIsSUFBK0IsS0FBTSxDQUFBLENBQUEsQ0FBRSxDQUFDLE1BQVQsR0FBa0IsQ0FBakQsSUFBc0QsS0FBTSxDQUFBLENBQUEsQ0FBRSxDQUFDLE9BQVQsQ0FBcUIsSUFBQSxNQUFBLENBQU8sSUFBQSxHQUFLO01BQUMsT0FBQSxFQUFRLEVBQVQ7TUFBWSxRQUFBLEVBQVMsR0FBckI7S0FBMEIsQ0FBQSxRQUFRLENBQUMsUUFBVCxDQUEvQixHQUFrRCxLQUF6RCxDQUFyQixFQUFzRixFQUF0RixDQUFBLEtBQTZGLFFBQVEsQ0FBQyxJQUFoSztBQUNFLGFBQU8sS0FEVDs7V0FFQTtFQU5VOzs7Ozs7QUFVZCxDQUFBLENBQUUsU0FBQTtTQUNBLElBQUk7QUFESixDQUFGIiwiZmlsZSI6ImJvbmVzLXRtcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCYXNlXG5cbmNsYXNzIEJvbmVzXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgbmV3IEJvbmVzLk1lbnVcbiAgICBuZXcgQm9uZXMuTGlua3NcblxuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1lbnVcblxuY2xhc3MgQm9uZXMuTWVudVxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgICQoJy5fbWVudS10cmlnZ2VyJykuY2xpY2soQHRvZ2dsZU1lbnUpXG5cbiAgdG9nZ2xlTWVudTogKGUpIC0+XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbWVudSA9ICQoXCIjI3skKGUudGFyZ2V0KS5hdHRyKCdkYXRhLW1lbnUnKX1cIilcbiAgICBtZW51LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKSBpZiBtZW51Lmxlbmd0aCA+IDBcblxuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExpbmtzXG5cbmNsYXNzIEJvbmVzLkxpbmtzXG5cbiAgaW5pdGlhbGl6ZTogLT5cbiAgICBAZGlzYWJsZWRMaW5rcygpXG4gICAgQGV4dGVybmFsTGlua3MoKVxuXG4gIGRpc2FibGVkTGlua3M6IC0+XG4gICAgJCgnYS5kaXNhYmxlZCcpLm9uICdjbGljaycsIChlKSAtPlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgZXh0ZXJuYWxMaW5rczogLT5cbiAgICBmb3IgbGluayBpbiAkKCdhJylcbiAgICAgIGlmIEBpc0V4dGVybmFsKCQobGluaykuYXR0cignaHJlZicpKVxuICAgICAgICAkKGxpbmspLmF0dHIoJ3RhcmdldCcsJ19ibGFuaycpXG5cbiAgaXNFeHRlcm5hbDogKHVybCkgLT5cbiAgICBtYXRjaCA9IHVybC5tYXRjaCgvXihbXjpcXC8/I10rOik/KD86XFwvXFwvKFteXFwvPyNdKikpPyhbXj8jXSspPyhcXD9bXiNdKik/KCMuKik/LylcbiAgICBpZiAodHlwZW9mIG1hdGNoWzFdID09IFwic3RyaW5nXCIgJiYgbWF0Y2hbMV0ubGVuZ3RoID4gMCAmJiBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpICE9IGxvY2F0aW9uLnByb3RvY29sKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICBpZiAodHlwZW9mIG1hdGNoWzJdID09IFwic3RyaW5nXCIgJiYgbWF0Y2hbMl0ubGVuZ3RoID4gMCAmJiBtYXRjaFsyXS5yZXBsYWNlKG5ldyBSZWdFeHAoXCI6KFwiK3tcImh0dHA6XCI6ODAsXCJodHRwczpcIjo0NDN9W2xvY2F0aW9uLnByb3RvY29sXStcIik/JFwiKSwgXCJcIikgIT0gbG9jYXRpb24uaG9zdClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZmFsc2VcblxuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluaXRpYWxpemVcblxuJCAtPlxuICBuZXcgQm9uZXNcbiJdfQ==
