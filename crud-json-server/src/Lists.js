import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Lists(props) {
    let listitems =[];
    props.alldata.forEach(element => {
        listitems.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.author}</td>
            </tr>
        )
        
    })

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>{listitems}</tbody>
        </table>
    )
}

export default Lists;