import React from 'react'
require('../../assets/css/Model.css')


const Model = (props) =>{

    const findByKey = (name) =>
    props.children.map(child =>{
        if(child.key === name) return child
    })

    const closeModel = (e) =>{
        e.stopPropagation()
        if( e.target.classList.contains('modal-close')){
            return props.click()
        }
    }
    return (
        <div className="modal-mask modal-close" onClick={closeModel}>
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-header">
                         {findByKey('header')}
                    </div>
                    <div className="modal-body">
                         {findByKey('body')}
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close button" onClick={closeModel}>Close</button>
                         {findByKey('footer')}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Model;