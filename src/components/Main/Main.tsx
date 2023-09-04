import * as S from './styles';
import { MainProps } from './types';

export function Main({ title = 'hello world' }: MainProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
