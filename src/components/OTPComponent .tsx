import React, { useRef, useState } from 'react';

const OTPComponent = ({ length = 6, onComplete }: {length: number, onComplete: any}) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[] | null[]>([]);

  const handleChange = (index : number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()} className="mt-6 mb-4 flex justify-center gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => {
            inputRefs.current[index] = el;
            return;
          }}
          className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </form>
  )
};

export default OTPComponent;