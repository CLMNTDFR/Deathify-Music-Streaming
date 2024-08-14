// ShoppingList.js
import { useState } from 'react';
import { recordList } from "../datas/recordList";
import RecordItem from './RecordItem';
import Categories from './Categories';
import Message from './Message';
import '../styles/ShoppingList.css';
import plusIcon from '../assets/tbs-plus.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicPlayer from './MusicPlayer';

function ShoppingList({ cart, updateCart, showAlert }) {
    const [activeCategory, setActiveCategory] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [isPlayerVisible, setPlayerVisible] = useState(false);

    const sortedRecordList = recordList.sort((a, b) => b.year - a.year);

    const categories = sortedRecordList.reduce(
        (acc, record) =>
            acc.includes(record.category) ? acc : acc.concat(record.category),
        []
    );

    const closePlayer = () => {
        setPlayerVisible(false);
    };

    function addToCart(name, price) {
        const currentRecordSaved = cart.find((record) => record.name === name);
        if (currentRecordSaved) {
            toast.error(`"${name}" has already been added to the cart`);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
            toast.success(`${name} has been added to the cart`);
        }
    }

    function openPlayer(albumId) {
        const album = recordList.find(record => record.id === albumId);
        setSelectedAlbum(album);
        setPlayerVisible(true);
    }

    return (
        <div className='tbs-shopping-list'>
            <Message /> {}
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='tbs-record-list'>
                {sortedRecordList.map(({ id, cover, name, year, price, category, tracks }) => (
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <RecordItem
                                id={id}
                                cover={cover}
                                name={name}
                                year={year}
                                price={price}
                                onClick={() => openPlayer(id)}
                            />
                            <button className='tbs-add-button' onClick={() => addToCart(name, price)}>
                                <img src={plusIcon} alt="plus icon" className='tbs-plus-icon' />
                                Add to cart
                            </button>
                        </div>
                    ) : null
                ))}
            </ul>
            {isPlayerVisible && selectedAlbum && (
                <MusicPlayer
                    tracks={selectedAlbum.tracks || []}
                    cover={selectedAlbum.cover || ''}
                    onClose={closePlayer}
                />
            )}
        </div>
    );
}

export default ShoppingList;