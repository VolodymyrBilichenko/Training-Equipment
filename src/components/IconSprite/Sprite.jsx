import React from 'react'

export const Sprite = () => {
  return (
    <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>

        <symbol viewBox="0 0 48 48" id="tel">
            <path d="M13 46C12.2 46 11.5 45.7 10.9 45.1C10.3 44.5 10 43.8 10 43V5C10 4.2 10.3 3.5 10.9 2.9C11.5 2.3 12.2 2 13 2H35C35.8 2 36.5 2.3 37.1 2.9C37.7 3.5 38 4.2 38 5V43C38 43.8 37.7 44.5 37.1 45.1C36.5 45.7 35.8 46 35 46H13ZM13 41.5V43H35V41.5H13ZM13 38.5H35V9.5H13V38.5ZM13 6.5H35V5H13V6.5Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="email">
            <path d="M7 40C6.2 40 5.5 39.7 4.9 39.1C4.3 38.5 4 37.8 4 37V11C4 10.2 4.3 9.5 4.9 8.9C5.5 8.3 6.2 8 7 8H41C41.8 8 42.5 8.3 43.1 8.9C43.7 9.5 44 10.2 44 11V37C44 37.8 43.7 38.5 43.1 39.1C42.5 39.7 41.8 40 41 40H7ZM24 24.9L7 13.75V37H41V13.75L24 24.9ZM24 21.9L40.8 11H7.25L24 21.9ZM7 13.75V11V37V13.75Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 48 48" id="map-point">
            <path d="M24.0044 23.5C24.9681 23.5 25.7917 23.1569 26.475 22.4706C27.1583 21.7843 27.5 20.9593 27.5 19.9956C27.5 19.0319 27.1569 18.2083 26.4706 17.525C25.7843 16.8417 24.9593 16.5 23.9956 16.5C23.0319 16.5 22.2083 16.8432 21.525 17.5294C20.8417 18.2157 20.5 19.0407 20.5 20.0044C20.5 20.9681 20.8432 21.7917 21.5294 22.475C22.2157 23.1583 23.0407 23.5 24.0044 23.5ZM24 40.05C28.4333 36.0167 31.7083 32.3583 33.825 29.075C35.9417 25.7917 37 22.9 37 20.4C37 16.4737 35.7451 13.2587 33.2354 10.7552C30.7257 8.25175 27.6472 7 24 7C20.3528 7 17.2743 8.25175 14.7646 10.7552C12.2549 13.2587 11 16.4737 11 20.4C11 22.9 12.0833 25.7917 14.25 29.075C16.4167 32.3583 19.6667 36.0167 24 40.05ZM24 44C18.6333 39.4333 14.625 35.1917 11.975 31.275C9.325 27.3583 8 23.7333 8 20.4C8 15.4 9.60833 11.4167 12.825 8.45C16.0417 5.48333 19.7667 4 24 4C28.2333 4 31.9583 5.48333 35.175 8.45C38.3917 11.4167 40 15.4 40 20.4C40 23.7333 38.675 27.3583 36.025 31.275C33.375 35.1917 29.3667 39.4333 24 44Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 48 48" id="delivery">
            <path d="M11.2059 39.95C9.56863 39.95 8.175 39.3764 7.025 38.2292C5.875 37.082 5.3 35.6889 5.3 34.05H2V11C2 10.2 2.3 9.5 2.9 8.9C3.5 8.3 4.2 8 5 8H33.95V16.35H39.2L46 25.4V34.05H42.45C42.45 35.6889 41.877 37.082 40.7309 38.2292C39.5848 39.3764 38.1931 39.95 36.5559 39.95C34.9186 39.95 33.525 39.3764 32.375 38.2292C31.225 37.082 30.65 35.6889 30.65 34.05H17.1C17.1 35.6833 16.527 37.075 15.3809 38.225C14.2348 39.375 12.8431 39.95 11.2059 39.95ZM11.2 36.95C12 36.95 12.6833 36.6667 13.25 36.1C13.8167 35.5333 14.1 34.85 14.1 34.05C14.1 33.25 13.8167 32.5667 13.25 32C12.6833 31.4333 12 31.15 11.2 31.15C10.4 31.15 9.71667 31.4333 9.15 32C8.58333 32.5667 8.3 33.25 8.3 34.05C8.3 34.85 8.58333 35.5333 9.15 36.1C9.71667 36.6667 10.4 36.95 11.2 36.95ZM5 31.05H6.1C6.66667 30.15 7.38402 29.4333 8.25205 28.9C9.12008 28.3667 10.0868 28.1 11.1521 28.1C12.2174 28.1 13.1917 28.375 14.075 28.925C14.9583 29.475 15.6833 30.1833 16.25 31.05H30.95V11H5V31.05ZM36.55 36.95C37.35 36.95 38.0333 36.6667 38.6 36.1C39.1667 35.5333 39.45 34.85 39.45 34.05C39.45 33.25 39.1667 32.5667 38.6 32C38.0333 31.4333 37.35 31.15 36.55 31.15C35.75 31.15 35.0667 31.4333 34.5 32C33.9333 32.5667 33.65 33.25 33.65 34.05C33.65 34.85 33.9333 35.5333 34.5 36.1C35.0667 36.6667 35.75 36.95 36.55 36.95ZM33.95 26.75H43.25L37.7 19.35H33.95V26.75Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="time">
            <path d="M31.35 33.65L33.6 31.4L25.65 23.4V13.35H22.65V24.6L31.35 33.65ZM24 44C21.2667 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1833 5.575 31.75C4.525 29.3167 4 26.7333 4 24C4 21.2667 4.525 18.6833 5.575 16.25C6.625 13.8167 8.05833 11.6917 9.875 9.875C11.6917 8.05833 13.8167 6.625 16.25 5.575C18.6833 4.525 21.2667 4 24 4C26.7333 4 29.3167 4.525 31.75 5.575C34.1833 6.625 36.3083 8.05833 38.125 9.875C39.9417 11.6917 41.375 13.8167 42.425 16.25C43.475 18.6833 44 21.2667 44 24C44 26.7333 43.475 29.3167 42.425 31.75C41.375 34.1833 39.9417 36.3083 38.125 38.125C36.3083 39.9417 34.1833 41.375 31.75 42.425C29.3167 43.475 26.7333 44 24 44ZM24 41C28.6667 41 32.6667 39.3333 36 36C39.3333 32.6667 41 28.6667 41 24C41 19.3333 39.3333 15.3333 36 12C32.6667 8.66667 28.6667 7 24 7C19.3333 7 15.3333 8.66667 12 12C8.66667 15.3333 7 19.3333 7 24C7 28.6667 8.66667 32.6667 12 36C15.3333 39.3333 19.3333 41 24 41Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 48 48" id="close">
            <path d="M12.45 37.65L10.35 35.55L21.9 24L10.35 12.45L12.45 10.35L24 21.9L35.55 10.35L37.65 12.45L26.1 24L37.65 35.55L35.55 37.65L24 26.1L12.45 37.65Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 20 20" id="close-2">
            <path d="M5.1875 15.6875L4.3125 14.8125L9.125 10L4.3125 5.1875L5.1875 4.3125L10 9.125L14.8125 4.3125L15.6875 5.1875L10.875 10L15.6875 14.8125L14.8125 15.6875L10 10.875L5.1875 15.6875Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 24 24" id="close-3">
            <path d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="verifed">
            <path d="M21.8 30.65L33.2 19.25L31.1 17.2L21.95 26.35L16.9 21.3L14.7 23.5L21.8 30.65ZM24 43.95C19.3333 42.7833 15.5 40.075 12.5 35.825C9.5 31.575 8 26.9167 8 21.85V9.95L24 3.95L40 9.95V21.85C40 26.9167 38.5 31.575 35.5 35.825C32.5 40.075 28.6667 42.7833 24 43.95ZM24 40.85C27.8333 39.5833 30.9583 37.1917 33.375 33.675C35.7917 30.1583 37 26.2167 37 21.85V12.05L24 7.15L11 12.05V21.85C11 26.2167 12.2083 30.1583 14.625 33.675C17.0417 37.1917 20.1667 39.5833 24 40.85Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="language">
            <path d="M24 44C21.2 44 18.5833 43.475 16.15 42.425C13.7167 41.375 11.6 39.95 9.8 38.15C8 36.35 6.58333 34.225 5.55 31.775C4.51667 29.325 4 26.7 4 23.9C4 21.1 4.51667 18.4917 5.55 16.075C6.58333 13.6583 8 11.55 9.8 9.75C11.6 7.95 13.7167 6.54167 16.15 5.525C18.5833 4.50833 21.2 4 24 4C26.8 4 29.4167 4.50833 31.85 5.525C34.2833 6.54167 36.4 7.95 38.2 9.75C40 11.55 41.4167 13.6583 42.45 16.075C43.4833 18.4917 44 21.1 44 23.9C44 26.7 43.4833 29.325 42.45 31.775C41.4167 34.225 40 36.35 38.2 38.15C36.4 39.95 34.2833 41.375 31.85 42.425C29.4167 43.475 26.8 44 24 44ZM24 41.1C25.1667 39.9 26.1417 38.525 26.925 36.975C27.7083 35.425 28.35 33.5833 28.85 31.45H19.2C19.6667 33.45 20.2917 35.25 21.075 36.85C21.8583 38.45 22.8333 39.8667 24 41.1ZM19.75 40.5C18.9167 39.2333 18.2 37.8667 17.6 36.4C17 34.9333 16.5 33.2833 16.1 31.45H8.6C9.86667 33.8167 11.3333 35.675 13 37.025C14.6667 38.375 16.9167 39.5333 19.75 40.5ZM28.3 40.45C30.7 39.6833 32.8583 38.5333 34.775 37C36.6917 35.4667 38.2333 33.6167 39.4 31.45H31.95C31.5167 33.25 31.0083 34.8833 30.425 36.35C29.8417 37.8167 29.1333 39.1833 28.3 40.45ZM7.6 28.45H15.55C15.45 27.55 15.3917 26.7417 15.375 26.025C15.3583 25.3083 15.35 24.6 15.35 23.9C15.35 23.0667 15.3667 22.325 15.4 21.675C15.4333 21.025 15.5 20.3 15.6 19.5H7.6C7.36667 20.3 7.20833 21.0167 7.125 21.65C7.04167 22.2833 7 23.0333 7 23.9C7 24.7667 7.04167 25.5417 7.125 26.225C7.20833 26.9083 7.36667 27.65 7.6 28.45ZM18.65 28.45H29.4C29.5333 27.4167 29.6167 26.575 29.65 25.925C29.6833 25.275 29.7 24.6 29.7 23.9C29.7 23.2333 29.6833 22.5917 29.65 21.975C29.6167 21.3583 29.5333 20.5333 29.4 19.5H18.65C18.5167 20.5333 18.4333 21.3583 18.4 21.975C18.3667 22.5917 18.35 23.2333 18.35 23.9C18.35 24.6 18.3667 25.275 18.4 25.925C18.4333 26.575 18.5167 27.4167 18.65 28.45ZM32.4 28.45H40.4C40.6333 27.65 40.7917 26.9083 40.875 26.225C40.9583 25.5417 41 24.7667 41 23.9C41 23.0333 40.9583 22.2833 40.875 21.65C40.7917 21.0167 40.6333 20.3 40.4 19.5H32.45C32.55 20.6667 32.6167 21.5583 32.65 22.175C32.6833 22.7917 32.7 23.3667 32.7 23.9C32.7 24.6333 32.675 25.325 32.625 25.975C32.575 26.625 32.5 27.45 32.4 28.45ZM31.9 16.5H39.4C38.3 14.2 36.7917 12.2833 34.875 10.75C32.9583 9.21667 30.75 8.13333 28.25 7.5C29.0833 8.73333 29.7917 10.0667 30.375 11.5C30.9583 12.9333 31.4667 14.6 31.9 16.5ZM19.2 16.5H28.9C28.5333 14.7333 27.9167 13.025 27.05 11.375C26.1833 9.725 25.1667 8.26667 24 7C22.9333 7.9 22.0333 9.08333 21.3 10.55C20.5667 12.0167 19.8667 14 19.2 16.5ZM8.6 16.5H16.15C16.5167 14.7 16.9833 13.0917 17.55 11.675C18.1167 10.2583 18.8333 8.88333 19.7 7.55C17.2 8.18333 15.0167 9.25 13.15 10.75C11.2833 12.25 9.76667 14.1667 8.6 16.5Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="drop-down-arrow">
            <path d="M24 30.75L12 18.75L14.15 16.6L24 26.5L33.85 16.65L36 18.8L24 30.75Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="user">
            <path d="M11.1 35.25C13.2 33.7833 15.2833 32.6583 17.35 31.875C19.4167 31.0917 21.6333 30.7 24 30.7C26.3667 30.7 28.5917 31.0917 30.675 31.875C32.7583 32.6583 34.85 33.7833 36.95 35.25C38.4167 33.45 39.4583 31.6333 40.075 29.8C40.6917 27.9667 41 26.0333 41 24C41 19.1667 39.375 15.125 36.125 11.875C32.875 8.625 28.8333 7 24 7C19.1667 7 15.125 8.625 11.875 11.875C8.625 15.125 7 19.1667 7 24C7 26.0333 7.31667 27.9667 7.95 29.8C8.58333 31.6333 9.63333 33.45 11.1 35.25ZM23.9907 25.5C22.0636 25.5 20.4417 24.8386 19.125 23.5157C17.8083 22.1928 17.15 20.5678 17.15 18.6407C17.15 16.7136 17.8114 15.0917 19.1343 13.775C20.4572 12.4583 22.0822 11.8 24.0093 11.8C25.9364 11.8 27.5583 12.4614 28.875 13.7843C30.1917 15.1072 30.85 16.7322 30.85 18.6593C30.85 20.5864 30.1886 22.2083 28.8657 23.525C27.5428 24.8417 25.9178 25.5 23.9907 25.5ZM24.0234 44C21.2745 44 18.6833 43.475 16.25 42.425C13.8167 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.1872 5.575 31.7617C4.525 29.3362 4 26.7445 4 23.9867C4 21.2289 4.525 18.6417 5.575 16.225C6.625 13.8083 8.05833 11.6917 9.875 9.875C11.6917 8.05833 13.8128 6.625 16.2383 5.575C18.6638 4.525 21.2555 4 24.0133 4C26.7711 4 29.3583 4.525 31.775 5.575C34.1917 6.625 36.3083 8.05833 38.125 9.875C39.9417 11.6917 41.375 13.8089 42.425 16.2266C43.475 18.6443 44 21.2277 44 23.9766C44 26.7255 43.475 29.3167 42.425 31.75C41.375 34.1833 39.9417 36.3083 38.125 38.125C36.3083 39.9417 34.1911 41.375 31.7734 42.425C29.3557 43.475 26.7723 44 24.0234 44ZM24 41C25.8333 41 27.625 40.7333 29.375 40.2C31.125 39.6667 32.85 38.7333 34.55 37.4C32.85 36.2 31.1167 35.2833 29.35 34.65C27.5833 34.0167 25.8 33.7 24 33.7C22.2 33.7 20.4167 34.0167 18.65 34.65C16.8833 35.2833 15.15 36.2 13.45 37.4C15.15 38.7333 16.875 39.6667 18.625 40.2C20.375 40.7333 22.1667 41 24 41ZM24 22.5C25.1333 22.5 26.0583 22.1417 26.775 21.425C27.4917 20.7083 27.85 19.7833 27.85 18.65C27.85 17.5167 27.4917 16.5917 26.775 15.875C26.0583 15.1583 25.1333 14.8 24 14.8C22.8667 14.8 21.9417 15.1583 21.225 15.875C20.5083 16.5917 20.15 17.5167 20.15 18.65C20.15 19.7833 20.5083 20.7083 21.225 21.425C21.9417 22.1417 22.8667 22.5 24 22.5Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="favorite">
            <path d="M24 42.95L21.95 41.1C18.4244 37.8626 15.5097 35.07 13.2058 32.722C10.9019 30.374 9.06667 28.275 7.7 26.425C6.33333 24.575 5.375 22.9 4.825 21.4C4.275 19.9 4 18.3833 4 16.85C4 13.8448 5.00833 11.3352 7.025 9.32115C9.04167 7.30705 11.5333 6.3 14.5 6.3C16.4 6.3 18.1583 6.75 19.775 7.65C21.3917 8.55 22.8 9.85 24 11.55C25.4 9.75 26.8833 8.425 28.45 7.575C30.0167 6.725 31.7 6.3 33.5 6.3C36.4667 6.3 38.9583 7.30705 40.975 9.32115C42.9917 11.3352 44 13.8448 44 16.85C44 18.3833 43.725 19.9 43.175 21.4C42.625 22.9 41.6667 24.575 40.3 26.425C38.9333 28.275 37.0981 30.374 34.7942 32.722C32.4903 35.07 29.5756 37.8626 26.05 41.1L24 42.95ZM24 39C27.3745 35.9002 30.1515 33.2419 32.3309 31.0251C34.5103 28.8084 36.2417 26.8667 37.525 25.2C38.8083 23.5333 39.7083 22.0478 40.225 20.7433C40.7417 19.4387 41 18.1434 41 16.8573C41 14.6524 40.3 12.8417 38.9 11.425C37.5 10.0083 35.7037 9.3 33.5112 9.3C31.7938 9.3 30.2042 9.825 28.7425 10.875C27.2808 11.925 26.1 13.4 25.2 15.3H22.75C21.8833 13.4333 20.7192 11.9667 19.2575 10.9C17.7958 9.83334 16.2062 9.3 14.4887 9.3C12.2963 9.3 10.5 10.0083 9.1 11.425C7.7 12.8417 7 14.6553 7 16.8658C7 18.1553 7.25833 19.4583 7.775 20.775C8.29167 22.0917 9.19167 23.5917 10.475 25.275C11.7583 26.9583 13.5 28.9 15.7 31.1C17.9 33.3 20.6667 35.9333 24 39Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 48 48" id="favorited">
            <path d="M24 41.95L21.95 40.1C18.4244 36.8626 15.5097 34.07 13.2058 31.722C10.9019 29.374 9.06667 27.275 7.7 25.425C6.33333 23.575 5.375 21.9 4.825 20.4C4.275 18.9 4 17.3833 4 15.85C4 12.8448 5.00833 10.3352 7.025 8.32115C9.04167 6.30705 11.5333 5.3 14.5 5.3C16.4 5.3 18.1583 5.75 19.775 6.65C21.3917 7.55 22.8 8.85 24 10.55C25.4 8.75 26.8833 7.425 28.45 6.575C30.0167 5.725 31.7 5.3 33.5 5.3C36.4667 5.3 38.9583 6.30705 40.975 8.32115C42.9917 10.3352 44 12.8448 44 15.85C44 17.3833 43.725 18.9 43.175 20.4C42.625 21.9 41.6667 23.575 40.3 25.425C38.9333 27.275 37.0981 29.374 34.7942 31.722C32.4903 34.07 29.5756 36.8626 26.05 40.1L24 41.95ZM24 38C27.3745 34.9002 30.1515 32.2419 32.3309 30.0251C34.5103 27.8084 36.2417 25.8667 37.525 24.2C38.8083 22.5333 39.7083 21.0478 40.225 19.7433C40.7417 18.4387 41 17.1434 41 15.8573C41 13.6524 40.3 11.8417 38.9 10.425C37.5 9.00834 35.7037 8.3 33.5112 8.3C31.7938 8.3 30.2042 8.825 28.7425 9.875C27.2808 10.925 26.1 12.4 25.2 14.3H22.75C21.8833 12.4333 20.7192 10.9667 19.2575 9.9C17.7958 8.83334 16.2062 8.3 14.4887 8.3C12.2962 8.3 10.5 9.00834 9.1 10.425C7.7 11.8417 7 13.6553 7 15.8658C7 17.1553 7.25833 18.4583 7.775 19.775C8.29167 21.0917 9.19167 22.5917 10.475 24.275C11.7583 25.9583 13.5 27.9 15.7 30.1C17.9 32.3 20.6667 34.9333 24 38Z" fill="currentColor"/>
            <path d="M22 10.5C22 8.9 16.6667 7.83333 14 7.5H11.5L7.5 10L5.5 14V19L13 29.5L25 39.5C28.5 36.1667 36 29 38 27C40.5 24.5 42 16 42 14C42 12 39 8.5 38.5 7.5C38 6.5 31.5 8 29.5 8C27.9 8 25.1667 12 24 14C23.3333 13.5 22 12.1 22 10.5Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="cart">
            <path d="M9 44C8.175 44 7.46875 43.7062 6.88125 43.1188C6.29375 42.5312 6 41.825 6 41V14.5C6 13.675 6.29375 12.9688 6.88125 12.3813C7.46875 11.7937 8.175 11.5 9 11.5H14.5C14.5 8.9 15.3917 6.66667 17.175 4.8C18.9583 2.93333 21.15 2 23.75 2C26.4475 2 28.7469 2.91667 30.6482 4.75C32.5494 6.58333 33.5 8.83333 33.5 11.5H39C39.825 11.5 40.5312 11.7937 41.1188 12.3813C41.7062 12.9688 42 13.675 42 14.5V41C42 41.825 41.7062 42.5312 41.1188 43.1188C40.5312 43.7062 39.825 44 39 44H9ZM9 41H39V14.5H9V41ZM24 26.5C26.6333 26.5 28.9167 25.5333 30.85 23.6C32.7833 21.6667 33.75 19.3833 33.75 16.75H30.75C30.75 18.5833 30.0833 20.1667 28.75 21.5C27.4167 22.8333 25.8333 23.5 24 23.5C22.1667 23.5 20.5833 22.8333 19.25 21.5C17.9167 20.1667 17.25 18.5833 17.25 16.75H14.25C14.25 19.3833 15.2167 21.6667 17.15 23.6C19.0833 25.5333 21.3667 26.5 24 26.5ZM17.5 11.5H30.5C30.5 9.66667 29.875 8.125 28.625 6.875C27.375 5.625 25.8333 5 24 5C22.1667 5 20.625 5.625 19.375 6.875C18.125 8.125 17.5 9.66667 17.5 11.5Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="search">
            <path d="M39.8 41.95L26.65 28.8C25.65 29.6667 24.484 30.3417 23.1521 30.825C21.8201 31.3083 20.4027 31.55 18.9 31.55C15.2946 31.55 12.2433 30.3 9.74595 27.8C7.24865 25.3 6 22.2833 6 18.75C6 15.2167 7.25 12.2 9.75 9.7C12.25 7.2 15.275 5.95 18.825 5.95C22.375 5.95 25.3917 7.2 27.875 9.7C30.3583 12.2 31.6 15.2192 31.6 18.7575C31.6 20.1858 31.3667 21.5667 30.9 22.9C30.4333 24.2333 29.7333 25.4833 28.8 26.65L42 39.75L39.8 41.95ZM18.85 28.55C21.5583 28.55 23.8604 27.5917 25.7563 25.675C27.6521 23.7583 28.6 21.45 28.6 18.75C28.6 16.05 27.6521 13.7417 25.7563 11.825C23.8604 9.90833 21.5583 8.95 18.85 8.95C16.1139 8.95 13.7882 9.90833 11.8729 11.825C9.95763 13.7417 9 16.05 9 18.75C9 21.45 9.95763 23.7583 11.8729 25.675C13.7882 27.5917 16.1139 28.55 18.85 28.55Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 48 48" id="facebook">
            <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="instagram">
            <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"/>
            <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"/>
            <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 48 48" id="youtube">
            <path d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 20 20" id="arrow-next">
            <path d="M10.5013 10L6.66797 6.16667L7.83464 5L12.8346 10L7.83464 15L6.66797 13.8333L10.5013 10Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 39 36" id="quote">
            <path d="M39 0.366598L38.1153 7.27056C35.9527 7.1221 34.2817 7.51802 33.1021 8.45835C31.9225 9.39867 31.1361 10.7102 30.7429 12.3929C30.3497 14.0756 30.276 15.981 30.5217 18.1091H39V36H22.707V16.6243C22.707 10.7844 24.0832 6.37973 26.8355 3.41028C29.6371 0.391345 33.6919 -0.623217 39 0.366598ZM16.293 0.366598L15.4083 7.27056C13.2457 7.1221 11.5747 7.51802 10.3951 8.45835C9.2155 9.39867 8.42911 10.7102 8.03592 12.3929C7.64272 14.0756 7.569 15.981 7.81474 18.1091H16.293V36H0V16.6243C0 10.7844 1.37618 6.37973 4.12854 3.41028C6.93006 0.391345 10.9849 -0.623217 16.293 0.366598Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 26 26" id="viber">
            <path d="M14.0833 4.33331C13.485 4.33331 13 4.81834 13 5.41665C13 6.01495 13.485 6.49998 14.0833 6.49998C15.4622 6.49998 16.527 6.95486 17.2444 7.67227C17.9618 8.38967 18.4167 9.4545 18.4167 10.8333C18.4167 11.4316 18.9017 11.9166 19.5 11.9166C20.0983 11.9166 20.5833 11.4316 20.5833 10.8333C20.5833 8.96213 19.9549 7.31862 18.7764 6.14019C17.598 4.96177 15.9545 4.33331 14.0833 4.33331Z" fill="currentColor"/>
            <path d="M5.43118 8.67331C5.55497 7.69427 6.82735 6.36365 7.83714 6.5113L7.83552 6.50969C8.67957 6.67007 9.37253 7.94045 9.82922 8.77766C9.90424 8.91521 9.97289 9.04106 10.0348 9.14837C10.3456 9.70019 10.1438 10.2593 9.85394 10.4952C9.82043 10.5222 9.78528 10.5501 9.74913 10.5788C9.36342 10.885 8.86225 11.2828 8.97956 11.682C9.20768 12.4583 11.916 15.1667 13.2481 15.9366C13.656 16.1723 13.973 15.7145 14.2446 15.3224C14.3088 15.2298 14.3704 15.1409 14.4301 15.0656C14.657 14.7627 15.2165 14.5817 15.767 14.8807C16.5893 15.3595 17.3639 15.916 18.0802 16.5425C18.4379 16.8415 18.5219 17.2834 18.274 17.7504C17.8374 18.573 16.5747 19.6577 15.6581 19.4373C14.0571 19.0524 7.58268 16.5425 5.50304 9.27118C5.39414 8.95089 5.41217 8.81608 5.4278 8.69907L5.43118 8.67331Z" fill="currentColor"/>
            <path d="M14.0833 7.58331C13.485 7.58331 13 8.06834 13 8.66665C13 9.26495 13.485 9.74998 14.0833 9.74998C14.2727 9.74998 14.5526 9.85555 14.8069 10.1098C15.061 10.364 15.1667 10.644 15.1667 10.8333C15.1667 11.4316 15.6517 11.9166 16.25 11.9166C16.8483 11.9166 17.3333 11.4316 17.3333 10.8333C17.3333 9.93931 16.8973 9.13599 16.3389 8.57769C15.7807 8.01941 14.9773 7.58331 14.0833 7.58331Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.14345 25.8171C8.17428 25.8341 8.20592 25.8496 8.23825 25.8634C8.82617 26.1163 9.55193 25.5518 11.0034 24.4228L12.4579 23.2916C15.3703 23.388 17.8897 23.0058 19.8376 22.3243C22.0158 21.5621 23.7285 19.8494 24.4907 17.6712C25.5411 14.6694 25.5411 9.16367 24.4907 6.16188C23.7285 3.9836 22.0158 2.27093 19.8376 1.50871C16.3691 0.295048 9.5654 0.317689 6.16165 1.50871C3.98336 2.27093 2.27071 3.9836 1.50848 6.16188C0.45811 9.16367 0.45811 14.6694 1.50848 17.6712C2.27071 19.8494 3.98336 21.5621 6.16165 22.3243C6.58898 22.4738 7.06694 22.6378 7.58292 22.7499C7.58292 24.5888 7.58292 25.5082 8.14345 25.8171ZM9.74958 22.6532V21.4401C9.74958 21.1853 9.57192 20.965 9.32272 20.9117C8.49733 20.7353 7.67691 20.559 6.87725 20.2792C5.32133 19.7348 4.09801 18.5114 3.55357 16.9555C3.13985 15.7732 2.88737 13.9157 2.88737 11.9165C2.88737 9.91735 3.13985 8.0598 3.55357 6.87748C4.09801 5.32157 5.32133 4.09823 6.87725 3.55379C8.25052 3.07327 10.5265 2.77633 12.9777 2.77362C15.4286 2.77091 17.7187 3.06277 19.1219 3.55379C20.6778 4.09823 21.9012 5.32157 22.4456 6.87748C22.8593 8.0598 23.1118 9.91735 23.1118 11.9165C23.1118 13.9157 22.8593 15.7732 22.4456 16.9555C21.9012 18.5114 20.6778 19.7348 19.1219 20.2792C16.8126 21.0872 14.3635 21.178 11.9421 21.1063C11.8156 21.1026 11.6916 21.1428 11.5917 21.2205L9.74958 22.6532Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 26 26" id="telegram">
            <path d="M17.9732 8.15745C17.9781 8.15745 17.9846 8.15745 17.9911 8.15745C18.1609 8.15745 18.3185 8.21026 18.4477 8.30126L18.4452 8.29964C18.5395 8.3817 18.6029 8.49708 18.6183 8.62708V8.62951C18.6346 8.72864 18.6435 8.84239 18.6435 8.95858C18.6435 9.01139 18.6419 9.06339 18.6378 9.11539V9.10808C18.455 11.0329 17.662 15.7007 17.259 17.8555C17.0884 18.7679 16.7528 19.0734 16.4278 19.1026C15.7217 19.1685 15.1855 18.6363 14.5014 18.1878C13.4305 17.485 12.8252 17.0478 11.786 16.3629C10.5843 15.5723 11.3635 15.136 12.0476 14.4259C12.2272 14.239 15.3399 11.4075 15.4008 11.1507C15.4041 11.1353 15.4057 11.1182 15.4057 11.1003C15.4057 11.037 15.3821 10.9793 15.3439 10.9354C15.3017 10.9078 15.2489 10.8923 15.1936 10.8923C15.1571 10.8923 15.1221 10.8996 15.0896 10.9118L15.0913 10.911C14.984 10.9354 13.2734 12.0658 9.9595 14.3024C9.59794 14.5876 9.14131 14.768 8.64406 14.7891H8.63919C7.93475 14.7038 7.29531 14.547 6.68837 14.3235L6.7485 14.343C5.98638 14.0944 5.38106 13.9636 5.43306 13.5427C5.46069 13.3239 5.7624 13.0999 6.33819 12.8708C9.88502 11.3254 12.2502 10.3068 13.4338 9.81495C14.7394 9.12189 16.2531 8.55151 17.8448 8.18183L17.9724 8.15664L17.9732 8.15745ZM12.9422 0.832764C6.19681 0.849014 0.734375 6.3212 0.734375 13.069C0.734375 19.8266 6.21225 25.3053 12.9706 25.3053C19.729 25.3053 25.2069 19.8274 25.2069 13.069C25.2069 6.3212 19.7444 0.849014 13.0007 0.832764H12.9991C12.9801 0.832764 12.9611 0.832764 12.9422 0.832764Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 18 18" id="trash">
            <path d="M5.48077 15.3748C5.10674 15.3748 4.78727 15.2424 4.52237 14.9775C4.25746 14.7126 4.125 14.3931 4.125 14.0191V4.49986H3.375V3.37488H6.74998V2.71143H11.25V3.37488H14.625V4.49986H13.875V14.0191C13.875 14.3979 13.7437 14.7186 13.4812 14.9811C13.2187 15.2436 12.898 15.3748 12.5192 15.3748H5.48077ZM12.75 4.49986H5.24998V14.0191C5.24998 14.0864 5.27162 14.1417 5.31489 14.1849C5.35817 14.2282 5.41346 14.2499 5.48077 14.2499H12.5192C12.5769 14.2499 12.6298 14.2258 12.6779 14.1777C12.7259 14.1297 12.75 14.0768 12.75 14.0191V4.49986ZM7.05289 12.7499H8.17787V5.99986H7.05289V12.7499ZM9.82209 12.7499H10.9471V5.99986H9.82209V12.7499Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 26 26" id="download">
            <path d="M13 17.1041L8.37503 12.4792L9.51668 11.3042L12.1875 13.975V4.875H13.8124V13.975L16.4833 11.3042L17.6249 12.4792L13 17.1041ZM6.83334 21.1249C6.28611 21.1249 5.82292 20.9354 5.44375 20.5562C5.06458 20.177 4.875 19.7138 4.875 19.1666V16.2291H6.49997V19.1666C6.49997 19.2499 6.53469 19.3264 6.60413 19.3958C6.67359 19.4653 6.75 19.5 6.83334 19.5H19.1666C19.2499 19.5 19.3263 19.4653 19.3958 19.3958C19.4653 19.3264 19.5 19.2499 19.5 19.1666V16.2291H21.1249V19.1666C21.1249 19.7138 20.9354 20.177 20.5562 20.5562C20.177 20.9354 19.7138 21.1249 19.1666 21.1249H6.83334Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 24 24" id="edit">
            <path d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 24 24" id="edit-2">
            <path d="M2 23.9999V21H22V23.9999H2ZM6 16.4134H7.23653L15.5366 8.12876L14.9077 7.49028L14.2846 6.87683L6 15.1769V16.4134ZM4.50003 17.9134V14.5384L15.7097 3.34418C15.8545 3.19932 16.0189 3.08971 16.2029 3.01536C16.3869 2.94099 16.5783 2.90381 16.7771 2.90381C16.976 2.90381 17.1686 2.94099 17.355 3.01536C17.5414 3.08971 17.7122 3.20445 17.8673 3.35958L19.0692 4.57688C19.2243 4.72175 19.3365 4.88765 19.4057 5.07458C19.475 5.26153 19.5096 5.45471 19.5096 5.65411C19.5096 5.84106 19.4745 6.02703 19.4043 6.21201C19.3341 6.39699 19.2224 6.56603 19.0692 6.71913L7.87497 17.9134H4.50003ZM15.5366 8.12876L14.9077 7.49028L14.2846 6.87683L15.5366 8.12876Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 24 24" id="save">
            <path d="M20.5 7.21153V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.3077C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80257 3.5 5.3077 3.5H16.7884L20.5 7.21153ZM19 7.84998L16.15 4.99998H5.3077C5.21795 4.99998 5.14423 5.02883 5.08653 5.08653C5.02883 5.14423 4.99997 5.21795 4.99997 5.3077V18.6923C4.99997 18.782 5.02883 18.8557 5.08653 18.9134C5.14423 18.9711 5.21795 19 5.3077 19H18.6923C18.782 19 18.8557 18.9711 18.9134 18.9134C18.9711 18.8557 19 18.782 19 18.6923V7.84998ZM12 17.2692C12.6923 17.2692 13.282 17.0256 13.7692 16.5384C14.2564 16.0512 14.5 15.4615 14.5 14.7692C14.5 14.0769 14.2564 13.4872 13.7692 13C13.282 12.5128 12.6923 12.2692 12 12.2692C11.3077 12.2692 10.7179 12.5128 10.2308 13C9.74359 13.4872 9.5 14.0769 9.5 14.7692C9.5 15.4615 9.74359 16.0512 10.2308 16.5384C10.7179 17.0256 11.3077 17.2692 12 17.2692ZM6.38463 9.88458H14.5961V6.38463H6.38463V9.88458Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 24 24" id="cancel">
            <path d="M12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C12.9382 20 13.8417 19.8413 14.7104 19.524C15.5791 19.2067 16.3731 18.7474 17.0923 18.1461L5.85383 6.90765C5.25896 7.62688 4.80127 8.42086 4.48075 9.28958C4.16023 10.1583 3.99998 11.0618 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20ZM18.1461 17.0923C18.7474 16.3731 19.2067 15.5791 19.524 14.7104C19.8413 13.8417 20 12.9382 20 12C20 9.76664 19.225 7.87498 17.675 6.32498C16.125 4.77498 14.2333 3.99998 12 3.99998C11.0595 3.99998 10.1539 4.15703 9.28308 4.47113C8.41228 4.78524 7.62047 5.24614 6.90765 5.85383L18.1461 17.0923Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 24 24" id="change-password">
            <path d="M2 23.9999V21H22V23.9999H2ZM6 16.4134H7.23653L15.5366 8.12876L14.9077 7.49028L14.2846 6.87683L6 15.1769V16.4134ZM4.50003 17.9134V14.5384L15.7097 3.34418C15.8545 3.19932 16.0189 3.08971 16.2029 3.01536C16.3869 2.94099 16.5783 2.90381 16.7771 2.90381C16.976 2.90381 17.1686 2.94099 17.355 3.01536C17.5414 3.08971 17.7122 3.20445 17.8673 3.35958L19.0692 4.57688C19.2243 4.72175 19.3365 4.88765 19.4057 5.07458C19.475 5.26153 19.5096 5.45471 19.5096 5.65411C19.5096 5.84106 19.4745 6.02703 19.4043 6.21201C19.3341 6.39699 19.2224 6.56603 19.0692 6.71913L7.87497 17.9134H4.50003ZM15.5366 8.12876L14.9077 7.49028L14.2846 6.87683L15.5366 8.12876Z" fill="currentColor"/>	
        </symbol>

        <symbol viewBox="0 0 24 24" id="circle-check">
            <path d="M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 17 17" id="check">
            <path d="M6.76406 12.7499L2.72656 8.71239L3.73594 7.70301L6.76406 10.7311L13.263 4.23218L14.2724 5.24155L6.76406 12.7499Z" fill="currentColor"/>
        </symbol>

        <symbol viewBox="0 0 44 44" id="link-arrow">
            <path d="M32.4923 6.26923H3.88462V0.5H43.5V40.1154H37.7308V11.5077V10.3006L36.8772 11.1541L4.73846 43.2929L0.707107 39.2615L32.8459 7.12278L33.6994 6.26923H32.4923Z" stroke="currentColor" fill="none"/>
        </symbol>

        <symbol viewBox="0 0 24 24" id="visibility">
            <path d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z" fill="currentColor"/>	
        </symbol>
        
    </svg>
  )
}
