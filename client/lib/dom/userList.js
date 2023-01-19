import { insertLast } from "../dom/insert.js";




//카드를 계속 찍어내기 위한 함수
export const creatUserCard = ({
  id = '',
  name = '',
  email = '',
  website:site = '',
} ={}) => {


  return /* html */ `
  <article class="user-card" data-index="user-${id}">
    <h3 class="user-name">${name}</h3>
    <div class="user-resouce-info">
     <div>
       <a class="user-email" href="mailto:${email}">${email}</a>
     </div>
     <div>
        <a class="user-website" href="http://${site}" target="_blank" rel="noopener noreferer">${site}</a>
     </div>
    </div>
   <button class="delete">삭제</button>
  </article>
  `
}

creatUserCard({
  id:1,
  name:'three',
  email:'three@naver.com',
  website:'three.com'
});


const createSpinner = (size = 100, loadingMessage = '유저 정보를 가져오는중..') => {
  return/* html */`
  <figure class="loadingSpinner">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin:auto;background:#fff;display:block;" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"
      preserveAspectRatio="xMidYMid">
      <g transform="translate(50 50)">
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834" transform="rotate(0 0 0)" stroke="none"
            fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.972972972972973s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834" transform="rotate(9.72972972972973 0 0)"
            stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.9459459459459459s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(19.45945945945946 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.918918918918919s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(29.18918918918919 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8918918918918919s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(38.91891891891892 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8648648648648649s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(48.648648648648646 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8378378378378378s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(58.37837837837838 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8108108108108109s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(68.10810810810811 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7837837837837838s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(77.83783783783784 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7567567567567568s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(87.56756756756756 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7297297297297297s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(97.29729729729729 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7027027027027027s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(107.02702702702703 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.6756756756756757s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(116.75675675675676 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.6486486486486487s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(126.48648648648648 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.6216216216216216s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(136.21621621621622 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5945945945945946s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(145.94594594594594 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5675675675675675s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(155.67567567567568 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5405405405405406s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(165.40540540540542 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5135135135135135s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(175.13513513513513 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.4864864864864865s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(184.86486486486487 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.4594594594594595s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(194.59459459459458 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.43243243243243246s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(204.32432432432432 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.40540540540540543s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(214.05405405405406 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.3783783783783784s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(223.78378378378378 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.35135135135135137s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(233.51351351351352 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.32432432432432434s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(243.24324324324326 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.2972972972972973s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(252.97297297297297 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.2702702702702703s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(262.7027027027027 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.24324324324324326s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(272.43243243243245 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.21621621621621623s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(282.1621621621622 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.1891891891891892s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(291.8918918918919 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.16216216216216217s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(301.6216216216216 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.13513513513513514s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(311.35135135135135 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.10810810810810811s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(321.0810810810811 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.08108108108108109s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(330.81081081081084 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.05405405405405406s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(340.5405405405405 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.02702702702702703s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(350.27027027027026 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="0s"></animateTransform>
        </g>
      </g>
    </svg>

    <figcaption>${loadingMessage}</figcaption>
  </figure>
  `
}


export const renderSpinner = (target) => {
  insertLast(target, createSpinner());
}


export const renderUserCard = (target, data) => {
  insertLast(target, creatUserCard(data));
}



