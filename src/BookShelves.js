import React from 'react'

// Component to render individual book
class Shelf extends React.Component {

    render() {
        const { book, updateOption } = this.props
        let shelfValue = (book.shelf)
            ? book.shelf
            : 'none'

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ?`${book.imageLinks.thumbnail}`:`http://via.placeholder.com/128x193?text=No%20Cover`})`
                                }}></div>
                        
                        <div className="book-shelf-changer">
                            <select
                                value={shelfValue}
                                onChange={(event) => updateOption(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.author && book
                        .authors
                        .map((author, index) => (
                            <div key={index} className="book-authors">{author}</div>
                        ))}
                </div>
            </li>
        )
    }
}

export default Shelf
