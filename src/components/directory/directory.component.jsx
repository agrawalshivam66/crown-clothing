import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

export default class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Posters',
                    imageUrl: 'https://res.cloudinary.com/dxy4xnb4h/image/upload/v1571061583/samples/Posters/Procreate_-_Abstraction_1_gkavth.jpg',
                    id: 1,
                    linkUrl: 'shop/posters'
                },
                {
                    title: 'T-Shirts',
                    imageUrl: 'https://res.cloudinary.com/dxy4xnb4h/image/upload/v1571082039/samples/Posters/Godzilla_re4aca.png',
                    id: 2,
                    linkUrl: 'shop/tshirts'
                },
                {
                    title: 'Phone Cases',
                    imageUrl: 'https://res.cloudinary.com/dxy4xnb4h/image/upload/v1571066075/samples/Posters/Night_Stars_ggqhjy.jpg',
                    id: 3,
                    linkUrl: 'shop/phone-cases'
                },
                {
                    title: 'Mugs',
                    imageUrl: 'https://res.cloudinary.com/dxy4xnb4h/image/upload/v1571066992/samples/Posters/New_York_c2zlt2.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/mugs'
                },
                {
                    title: 'Mouse Pads',
                    imageUrl: 'https://res.cloudinary.com/dxy4xnb4h/image/upload/v1571064613/samples/Posters/FireDemon_kdwowj.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mouse-pads'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}