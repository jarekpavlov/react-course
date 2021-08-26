import React from 'react';
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder='Search...'
                onChange={(e => setFilter({...filter, query: e.target.value}))}/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sorting'
                optionsList={[
                    {value: 'title', name: 'Title'},
                    {value: 'body', name: 'Description'}]}/>

        </div>
    );
};

export default PostFilter;