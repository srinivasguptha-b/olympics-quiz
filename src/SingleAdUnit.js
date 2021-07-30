import React from "react";
import { Bling as GPT } from "react-gpt";

GPT.enableSingleRequest();

const SingleAdUnit = () => {
    return (
        <>
            <div id="div-gpt-ad-1501582186001-5" className="d-none d-md-block text-center">
                <GPT
                    adUnitPath="/1008496/mykhel-eng-home-728x90"
                    slotSize={[728, 90]}
                />
            </div>
            <div id="div-gpt-ad-1501582186001-0" className="d-block d-sm-none text-center">
                <GPT
                    adUnitPath="/1008496/mykhel-eng-home-300x250"
                    slotSize={[300, 250]}
                />
            </div>
        </>
    );
}
export default SingleAdUnit;