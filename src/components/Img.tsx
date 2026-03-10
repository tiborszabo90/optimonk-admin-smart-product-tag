import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'

import images_73def31a_b869_4f2a_a5e1_c2d8882e7cf6_svg from '/images/73def31a-b869-4f2a-a5e1-c2d8882e7cf6.svg';
import images_e750bb2f_1ead_4153_a21f_a8e2917d3e37_svg from '/images/e750bb2f-1ead-4153-a21f-a8e2917d3e37.svg';
import images_74653219_7bde_4054_ac8d_6866f6eefcac_svg from '/images/74653219-7bde-4054-ac8d-6866f6eefcac.svg';
import images_6ad93326_c941_4c0d_85a0_e110209c48f1_svg from '/images/6ad93326-c941-4c0d-85a0-e110209c48f1.svg';
import images_b217a256_cd54_4c3c_8b3c_383f4029b4bf_svg from '/images/b217a256-cd54-4c3c-8b3c-383f4029b4bf.svg';
import images_b1ea1391_2aad_49fd_8226_275398532638_svg from '/images/b1ea1391-2aad-49fd-8226-275398532638.svg';
import images_88245ea6_8ff0_4c53_ab9a_fd94bf84ba24_svg from '/images/88245ea6-8ff0-4c53-ab9a-fd94bf84ba24.svg';
import images_22e102eb_586e_4fc0_9369_51cfa91b0fcf_svg from '/images/22e102eb-586e-4fc0-9369-51cfa91b0fcf.svg';
import images_b1b54f88_9acc_4243_90f8_0700b95051f7_svg from '/images/b1b54f88-9acc-4243-90f8-0700b95051f7.svg';

export const Img = ({ id }) => {
    switch (String(id)) {    case "0":
        return (
            <img src={images_73def31a_b869_4f2a_a5e1_c2d8882e7cf6_svg}></img>
        );
    case "1":
        return (
            <img src={images_e750bb2f_1ead_4153_a21f_a8e2917d3e37_svg} className={"side-nav-icon"}></img>
        );
    case "2":
        return (
            <img src={images_74653219_7bde_4054_ac8d_6866f6eefcac_svg} className={"side-nav-icon"}></img>
        );
    case "3":
        return (
            <img src={images_6ad93326_c941_4c0d_85a0_e110209c48f1_svg} className={"side-nav-icon"}></img>
        );
    case "4":
        return (
            <img src={images_b217a256_cd54_4c3c_8b3c_383f4029b4bf_svg} className={"side-nav-icon"}></img>
        );
    case "5":
        return (
            <img src={images_b1ea1391_2aad_49fd_8226_275398532638_svg}></img>
        );
    case "6":
        return (
            <img src={images_88245ea6_8ff0_4c53_ab9a_fd94bf84ba24_svg}></img>
        );
    case "7":
        return (
            <img src={images_22e102eb_586e_4fc0_9369_51cfa91b0fcf_svg}></img>
        );
    case "8":
        return (
            <img data-v-716c1e5e={""} src={images_b1b54f88_9acc_4243_90f8_0700b95051f7_svg}></img>
        );
    default:
        return null;
    }
};

export default Img
