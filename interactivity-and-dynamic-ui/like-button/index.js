var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        return (
            <span onClick={this.handleClick}>{this.state.liked ? 'Unlike' : 'Like'}</span>
        );
    }
});

React.render(
    <LikeButton />,
    document.getElementById('content')
);