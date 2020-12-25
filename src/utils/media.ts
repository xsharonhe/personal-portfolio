import { InterpolationFunction } from 'styled-components';
import { IMainTemplate } from '../theme/theme';

export const media = (
    breakpoint: string,
    styling: string,
): InterpolationFunction<{theme: IMainTemplate}> => ({ theme }): string => `
    @media (max-width: ${theme.media[breakpoint] || breakpoint}px }) {
        ${styling}
    };
`;