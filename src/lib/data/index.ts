import type { PortfolioData, SupportedLanguage } from '../types/portfolio';
import { ptData } from './pt';
import { enData } from './en';

export const supportedLanguages: SupportedLanguage[] = ['pt', 'en'];
export const defaultLanguage: SupportedLanguage = 'pt';

export const contentMap: Record<SupportedLanguage, PortfolioData> = {
	pt: ptData,
	en: enData
};

export function isValidLanguage(lang: string): lang is SupportedLanguage {
	return supportedLanguages.includes(lang as SupportedLanguage);
}

export function getContent(lang: string = defaultLanguage): PortfolioData {
	if (isValidLanguage(lang)) {
		return contentMap[lang];
	}
	return contentMap[defaultLanguage];
}
