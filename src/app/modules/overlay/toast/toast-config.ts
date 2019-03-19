import { InjectionToken, TemplateRef } from '@angular/core';

export class ToastData {
  type: ToastType;
  text?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
}

export type ToastType = 'error' | 'message' | 'success';

export interface ToastConfig {
    position?: {
        bottom: number;
        left: number;
    };
    animation?: {
        fadeOut: number;
        fadeIn: number;
    };
}

export const defaultToastConfig: ToastConfig = {
    position: {
        bottom: 0,
        left: 0,
    },
    animation: {
        fadeOut: 2500,
        fadeIn: 300,
    },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');
