import React, { useState } from 'react';
const Library = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const add = () => {
        if (title == "" || author == "") {
            alert('empty')
        }
        else {
            setBooks(
                [...books, {
                    title: title,
                    author: author
                }]
            )
        }
        setTitle('')
        setAuthor('')
    }
    return (
        <div>
            <h1>Library</h1>
            <input type="text" name="title" value={title} onChange={onChangeTitle} />
            <input type="text" name="author" value={author} onChange={onChangeAuthor} />
            <button onClick={add}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) => {
                            return <tr key={book}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>Delete</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Library;