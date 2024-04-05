import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CustomToast = ({ ToastContainer, toast }) => {
    return (
        <div class="notifications" style={{top: '136px'}}>
            <div class="notifications__block">
                <div class="notifications__block_icon is-success">
                    {/* <!-- .is-failure --> */}
                    <svg width="37" height="37">
                        <use href="img/sprites.svg#circle-check-2"></use>
                    </svg>
                </div>
                <div class="notifications__block_text">
                    <p>
                        Товар успешно добавлен в корзину
                    </p>
                </div>
            </div>
        </div>
    )
}
