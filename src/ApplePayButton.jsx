import { useEffect, useState } from 'react';

const ApplePayButton = () => {
    const [applePayAvailable, setApplePayAvailable] = useState(false);

    useEffect(() => {
        if (window.ApplePaySession && window.ApplePaySession.canMakePayments()) {
            setApplePayAvailable(true);
        }
    }, []);
    const PaymentBody = () => {
        return (
            <div>
                <button type="plain" className="apple-pay-button" />
            </div>
        );
    };

    return (
        <div>
            {applePayAvailable ? (
                <PaymentBody />
            ) : (
                <p>Apple Pay is not available on this device or browser.</p>
            )}
        </div>
    );
};


export default ApplePayButton;

