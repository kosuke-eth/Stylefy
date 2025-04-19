import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50',
    {
      variants: {
        variant: {
          primary: 'bg-primary text-white dark:text-black hover:bg-primary-dark',
          secondary:
            'bg-secondary text-white dark:text-black hover:bg-secondary-dark',
          outline:
            'border border-gray-300 text-gray-700 dark:text-black hover:bg-gray-100',
          ghost: 'text-gray-700 dark:text-black hover:bg-gray-100',
        },
        /* ここに icon を追加 🔽 */
        size: {
          sm: 'px-3 py-1.5 text-xs',
          md: 'px-4 py-2 text-sm',
          lg: 'px-6 py-3 text-base',
          icon: 'p-0 w-10 h-10',   // 正方形のアイコンボタン
        },
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md',
      },
    },
  );
  

// ダークモード用のスタイルを追加
const darkModeStyles = {
  'dark:text-black': 'dark:text-black', // ダークモードでのボタンの文字色を黒に設定
};

// ボタンのスタイルにダークモード用のスタイルを追加
export const buttonVariantsWithDarkMode = cva(
  buttonVariants,
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>, // ← 衝突回避
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
