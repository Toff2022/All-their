import React from "react";

const HelloContent = () => {
    return (
        <div className='container'>
            <div className='text-container'>
                <ul className="list-group">
                    <li className="list-group-item">Этот проект задумывался как способ упорядочить свои памятные моменты
                        из разных поездок и путешествий, но перерос в смесь</li>

                    <li className="list-group-item list-group-item-primary">
                        <a href="http://localhost:3000/photoAlbum">Фотоальбома</a>,
                    </li>
                    <li className="list-group-item list-group-item-success">
                        <a href="http://localhost:3000/blogPage">Личного дневника</a> ,
                    </li>
                    <li className="list-group-item list-group-item-warning">
                        <a href="http://localhost:3000/familyTree">Родовой Книги</a>.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HelloContent;
