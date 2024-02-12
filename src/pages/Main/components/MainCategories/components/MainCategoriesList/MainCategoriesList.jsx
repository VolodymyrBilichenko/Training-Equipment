import React from 'react'

import CategoryIc1 from '../../../../../../assets/img/categories/category-icon-1.svg'
import CategoryIc2 from '../../../../../../assets/img/categories/category-icon-2.svg'
import CategoryIc3 from '../../../../../../assets/img/categories/category-icon-3.svg'
import CategoryIc4 from '../../../../../../assets/img/categories/category-icon-4.svg'
import CategoryIc5 from '../../../../../../assets/img/categories/category-icon-5.svg'
import CategoryIc6 from '../../../../../../assets/img/categories/category-icon-6.svg'
import CategoryIc7 from '../../../../../../assets/img/categories/category-icon-7.svg'
import CategoryIc8 from '../../../../../../assets/img/categories/category-icon-8.svg'
import CategoryIc9 from '../../../../../../assets/img/categories/category-icon-9.svg'
import CategoryIc10 from '../../../../../../assets/img/categories/category-icon-10.svg'


export const MainCategoriesList = () => {
    return (
        <ul className="categories__list">
            <li>
                <a href="foo">
                    <img src={CategoryIc1} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>STEM-лабораторії МОН №574</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc2} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Мультимедійне презентаційне обладнання</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc3} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Лінгафонний клас</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc4} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Комп'ютерний клас</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc5} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Комп'ютерна, акустична та периферійна техніка</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc6} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Інтерактивна підлога</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc7} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Дошкільна освіта (ДНЗ)</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc8} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Початкова школа НУШ</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc9} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Фізика</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc10} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Біологія</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc1} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Географія</h3>
                </a>
            </li>
            <li>
                <a href="foo">
                    <img src={CategoryIc7} width="52" height="52" loading="lazy" alt="categories ic"/>
                    <h3>Хімія</h3>
                </a>
            </li>
        </ul>
    )
}
