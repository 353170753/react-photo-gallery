require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-photo-gallery":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var Gallery = _react2['default'].createClass({
    displayName: 'Gallery',
    propTypes: {
        photos: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
            src: _react2['default'].PropTypes.string.isRequired,
            width: _react2['default'].PropTypes.number.isRequired,
            height: _react2['default'].PropTypes.number.isRequired,
            aspectRatio: _react2['default'].PropTypes.number.isRequired,
            lightboxImage: _react2['default'].PropTypes.object.isRequired
        })).isRequired
    },
    getInitialState: function getInitialState() {
        return {
            currentImage: 0,
            containerWidth: 0
        };
    },
    componentDidMount: function componentDidMount() {
        // add 15 pixels bc for unknown reason the clientWidth here is larger than what it really is
        this.setState({ containerWidth: Math.ceil(_reactDom2['default'].findDOMNode(this).clientWidth) });
        window.addEventListener('resize', this.handleResize);
    },
    handleResize: function handleResize(e) {
        this.setState({ containerWidth: _reactDom2['default'].findDOMNode(this).clientWidth });
    },
    openLightbox: function openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    },
    closeLightbox: function closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    },
    gotoPrevious: function gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    },
    gotoNext: function gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    },
    render: function render() {
        console.log('client');
        console.log(Math.ceil(_reactDom2['default'].findDOMNode(this).clientWidth));
        console.log('offset');
        console.log(Math.ceil(_reactDom2['default'].findDOMNode(this).offsetWidth));
        var rowLimit = 1,
            photoPreviewNodes = [];
        if (this.state.containerWidth >= 480) {
            rowLimit = 2;
        }
        if (this.state.containerWidth >= 1024) {
            rowLimit = 3;
        }
        console.log('state');
        console.log(this.state.containerWidth);
        var contWidth = this.state.containerWidth - rowLimit * 4; /* 4px for margin around each image*/
        console.log(contWidth);
        contWidth = Math.ceil(contWidth - 20); // subtract a couple pixels for unknown issue where line breaks in certain breakpoints.  this gives container some "padding"
        var lightboxImages = [];
        for (var i = 0; i < this.props.photos.length; i += rowLimit) {
            var rowItems = [];
            // loop thru each set of rowLimit num
            // eg. if rowLimit is 3 it will  loop thru 0,1,2, then 3,4,5 to perform calculations for the particular set
            var aspectRatio = 0,
                totalAr = 0,
                commonHeight = 0;
            for (var j = i; j < i + rowLimit; j++) {
                if (j == this.props.photos.length) {
                    break;
                }
                totalAr += this.props.photos[j].aspectRatio;
            }
            commonHeight = contWidth / totalAr;
            // run thru the same set of items again to give the common height
            for (var k = i; k < i + rowLimit; k++) {
                if (k == this.props.photos.length) {
                    break;
                }
                lightboxImages.push(this.props.photos[k].lightboxImage);
                var src = this.props.photos[k].src;
                photoPreviewNodes.push(_react2['default'].createElement(
                    'div',
                    { key: k, style: style },
                    _react2['default'].createElement(
                        'a',
                        { href: '#', className: k, onClick: this.openLightbox.bind(this, k) },
                        _react2['default'].createElement('img', { src: src, style: { display: 'block', border: 0 }, height: commonHeight, width: Math.floor(commonHeight * this.props.photos[k].aspectRatio), alt: '' })
                    )
                ));
            }
        }
        return _react2['default'].createElement(
            'div',
            { id: 'Gallery', className: 'clearfix' },
            photoPreviewNodes,
            _react2['default'].createElement(_reactImages2['default'], {
                currentImage: this.state.currentImage,
                images: lightboxImages,
                isOpen: this.state.lightboxIsOpen,
                onClose: this.closeLightbox,
                onClickPrev: this.gotoPrevious,
                onClickNext: this.gotoNext,
                width: 1600,
                height: 1600,
                styles: this.props.lightboxStyles
            })
        );
    }
});
// Gallery image style
var style = {
    display: 'block',
    margin: 2,
    backgroundColor: '#e3e3e3',
    float: 'left'
};

module.exports = Gallery;

},{"react":undefined,"react-dom":undefined,"react-images":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2hlbGVuaWEvcmVhY3QtcGhvdG8tZ2FsbGVyeS9zcmMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7OzsyQkFDWCxjQUFjOzs7O0FBRW5DLElBQUksT0FBTyxHQUFHLG1CQUFNLFdBQVcsQ0FBQztBQUM1QixlQUFXLEVBQUUsU0FBUztBQUN0QixhQUFTLEVBQUM7QUFDTixjQUFNLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE9BQU8sQ0FDM0IsbUJBQU0sU0FBUyxDQUFDLEtBQUssQ0FBQztBQUNsQixlQUFHLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQ3RDLGlCQUFLLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQ3hDLGtCQUFNLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQ3pDLHVCQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQzlDLHlCQUFhLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1NBQ25ELENBQUMsQ0FDTCxDQUFDLFVBQVU7S0FDZjtBQUNELG1CQUFlLEVBQUUsMkJBQVU7QUFDdkIsZUFBTztBQUNWLHdCQUFZLEVBQUUsQ0FBQztBQUNmLDBCQUFjLEVBQUUsQ0FBQztTQUNwQixDQUFBO0tBQ0c7QUFDRCxxQkFBaUIsRUFBRSw2QkFBVTs7QUFFaEMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFTLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDLENBQUE7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LENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUc7cUJBQUk7aUJBQzNOLENBQ1YsQ0FBQzthQUNMO1NBQ0o7QUFDUixlQUNXOztjQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFVBQVU7WUFDakMsaUJBQWlCO1lBQ2xCO0FBQ1YsNEJBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQUFBQztBQUN4QixzQkFBTSxFQUFFLGNBQWMsQUFBQztBQUN2QixzQkFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxBQUFDO0FBQ2xDLHVCQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQUFBQztBQUMxQywyQkFBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEFBQUM7QUFDL0IsMkJBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxBQUFDO0FBQ2IscUJBQUssRUFBRSxJQUFJLEFBQUM7QUFDWixzQkFBTSxFQUFFLElBQUksQUFBQztBQUNiLHNCQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEFBQUM7Y0FDcEM7U0FDQSxDQUNSO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsSUFBTSxLQUFLLEdBQUc7QUFDWCxXQUFPLEVBQUUsT0FBTztBQUNoQixVQUFNLEVBQUUsQ0FBQztBQUNULG1CQUFlLEVBQUMsU0FBUztBQUN6QixTQUFLLEVBQUUsTUFBTTtDQUNmLENBQUE7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlcyc7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnR2FsbGVyeScsXG4gICAgcHJvcFR5cGVzOntcbiAgICAgICAgcGhvdG9zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgc3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgIGxpZ2h0Ym94SW1hZ2U6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKS5pc1JlcXVpcmVkLFxuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuXHQgICAgY3VycmVudEltYWdlOiAwLFxuXHQgICAgY29udGFpbmVyV2lkdGg6IDBcblx0fVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG5cdC8vIGFkZCAxNSBwaXhlbHMgYmMgZm9yIHVua25vd24gcmVhc29uIHRoZSBjbGllbnRXaWR0aCBoZXJlIGlzIGxhcmdlciB0aGFuIHdoYXQgaXQgcmVhbGx5IGlzXG5cdHRoaXMuc2V0U3RhdGUoe2NvbnRhaW5lcldpZHRoOiBNYXRoLmNlaWwoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuY2xpZW50V2lkdGgpfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9LFxuICAgIGhhbmRsZVJlc2l6ZTogZnVuY3Rpb24oZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbnRhaW5lcldpZHRoOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5jbGllbnRXaWR0aH0pO1xuICAgIH0sXG4gICAgb3BlbkxpZ2h0Ym94IChpbmRleCwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICBjdXJyZW50SW1hZ2U6IGluZGV4LFxuICAgICAgICAgICAgbGlnaHRib3hJc09wZW46IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjbG9zZUxpZ2h0Ym94ICgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICBjdXJyZW50SW1hZ2U6IDAsXG4gICAgICAgICAgICBsaWdodGJveElzT3BlbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ290b1ByZXZpb3VzICgpIHtcblx0dGhpcy5zZXRTdGF0ZSh7XG5cdCAgICBjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlIC0gMSxcblx0fSk7XG4gICAgfSxcbiAgICBnb3RvTmV4dCAoKSB7XG5cdHRoaXMuc2V0U3RhdGUoe1xuXHQgICAgY3VycmVudEltYWdlOiB0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZSArIDEsXG5cdH0pO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuXHRjb25zb2xlLmxvZygnY2xpZW50Jyk7XG5cdGNvbnNvbGUubG9nKE1hdGguY2VpbChSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5jbGllbnRXaWR0aCkpO1xuXHRjb25zb2xlLmxvZygnb2Zmc2V0Jyk7XG5cdGNvbnNvbGUubG9nKE1hdGguY2VpbChSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5vZmZzZXRXaWR0aCkpO1xuICAgICAgICB2YXIgcm93TGltaXQgPSAxLFxuICAgICAgICAgICAgcGhvdG9QcmV2aWV3Tm9kZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29udGFpbmVyV2lkdGggPj0gNDgwKXtcbiAgICAgICAgICAgIHJvd0xpbWl0ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb250YWluZXJXaWR0aCA+PSAxMDI0KXtcbiAgICAgICAgICAgIHJvd0xpbWl0ID0gMztcbiAgICAgICAgfVxuXHRjb25zb2xlLmxvZygnc3RhdGUnKTtcblx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jb250YWluZXJXaWR0aCk7XG4gICAgICAgIHZhciBjb250V2lkdGggPSB0aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRoIC0gKHJvd0xpbWl0ICogNCk7IC8qIDRweCBmb3IgbWFyZ2luIGFyb3VuZCBlYWNoIGltYWdlKi9cblx0Y29uc29sZS5sb2coY29udFdpZHRoKTtcbiAgICAgICAgY29udFdpZHRoID0gTWF0aC5jZWlsKGNvbnRXaWR0aCAtIDIwKTsgLy8gc3VidHJhY3QgYSBjb3VwbGUgcGl4ZWxzIGZvciB1bmtub3duIGlzc3VlIHdoZXJlIGxpbmUgYnJlYWtzIGluIGNlcnRhaW4gYnJlYWtwb2ludHMuICB0aGlzIGdpdmVzIGNvbnRhaW5lciBzb21lIFwicGFkZGluZ1wiXG5cdHZhciBsaWdodGJveEltYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpPTA7aTx0aGlzLnByb3BzLnBob3Rvcy5sZW5ndGg7aSs9cm93TGltaXQpe1xuICAgICAgICAgICAgdmFyIHJvd0l0ZW1zID0gW107XG4gICAgICAgICAgICAvLyBsb29wIHRocnUgZWFjaCBzZXQgb2Ygcm93TGltaXQgbnVtXG4gICAgICAgICAgICAvLyBlZy4gaWYgcm93TGltaXQgaXMgMyBpdCB3aWxsICBsb29wIHRocnUgMCwxLDIsIHRoZW4gMyw0LDUgdG8gcGVyZm9ybSBjYWxjdWxhdGlvbnMgZm9yIHRoZSBwYXJ0aWN1bGFyIHNldFxuICAgICAgICAgICAgdmFyIGFzcGVjdFJhdGlvPTAsXG4gICAgICAgICAgICAgICAgdG90YWxBcj0wLFxuICAgICAgICAgICAgICAgIGNvbW1vbkhlaWdodCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBqPWk7IGo8aStyb3dMaW1pdDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSB0aGlzLnByb3BzLnBob3Rvcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cdFx0dG90YWxBciArPSB0aGlzLnByb3BzLnBob3Rvc1tqXS5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbW1vbkhlaWdodCA9IGNvbnRXaWR0aCAvIHRvdGFsQXI7XG4gICAgICAgICAgICAvLyBydW4gdGhydSB0aGUgc2FtZSBzZXQgb2YgaXRlbXMgYWdhaW4gdG8gZ2l2ZSB0aGUgY29tbW9uIGhlaWdodFxuICAgICAgICAgICAgZm9yICh2YXIgaz1pOyBrPGkrcm93TGltaXQ7IGsrKyl7XG4gICAgICAgICAgICAgICAgaWYgKGsgPT0gdGhpcy5wcm9wcy5waG90b3MubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXHRcdGxpZ2h0Ym94SW1hZ2VzLnB1c2godGhpcy5wcm9wcy5waG90b3Nba10ubGlnaHRib3hJbWFnZSk7XG5cdFx0dmFyIHNyYyA9IHRoaXMucHJvcHMucGhvdG9zW2tdLnNyYztcbiAgICAgICAgICAgICAgICBwaG90b1ByZXZpZXdOb2Rlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17a30gb25DbGljaz17dGhpcy5vcGVuTGlnaHRib3guYmluZCh0aGlzLCBrKX0+PGltZyBzcmM9e3NyY30gc3R5bGU9e3tkaXNwbGF5OidibG9jaycsIGJvcmRlcjowfX0gaGVpZ2h0PXtjb21tb25IZWlnaHR9IHdpZHRoPXtNYXRoLmZsb29yKGNvbW1vbkhlaWdodCAqIHRoaXMucHJvcHMucGhvdG9zW2tdLmFzcGVjdFJhdGlvKX0gYWx0PVwiXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJHYWxsZXJ5XCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICB7cGhvdG9QcmV2aWV3Tm9kZXN9XG4gICAgICAgICAgICAgICAgPExpZ2h0Ym94XG5cdFx0ICAgIGN1cnJlbnRJbWFnZT17dGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz17bGlnaHRib3hJbWFnZXN9XG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5saWdodGJveElzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5jbG9zZUxpZ2h0Ym94fVxuXHRcdCAgICBvbkNsaWNrUHJldj17dGhpcy5nb3RvUHJldmlvdXN9XG5cdFx0ICAgIG9uQ2xpY2tOZXh0PXt0aGlzLmdvdG9OZXh0fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTYwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNjAwfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3RoaXMucHJvcHMubGlnaHRib3hTdHlsZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuLy8gR2FsbGVyeSBpbWFnZSBzdHlsZVxuY29uc3Qgc3R5bGUgPSB7XG4gICBkaXNwbGF5OiAnYmxvY2snLFxuICAgbWFyZ2luOiAyLFxuICAgYmFja2dyb3VuZENvbG9yOicjZTNlM2UzJyxcbiAgIGZsb2F0OiAnbGVmdCdcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsZXJ5O1xuIl19
