import React from 'react';

export default class Form extends React.Component {
    render() {
        return(
            <>
                <div id="form-div">
                    <div id='form-nav'>
                        <a>Add Project</a>
                        <a>Add Skill</a>
                    </div>
                    <form>
                    <label for="pr-name" >Project Name:</label>
                    <input name="pr-name" />
                    <label for="pr-description" >Project description:</label>
                    <textarea name="pr-description" />
                    <label for="pr-category" >Project category:</label>
                    <input name="pr-category" />
                    <label for="pr-image" >Project image:</label>
                    <input name="pr-image" type="file"/>
                    </form>
                </div>
            </>
        )
    }
}