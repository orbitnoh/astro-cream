---
title: LaTeX
slug: latex
date: 2026-06-30
private: false
---

## LaTeX 수식 확인

이 글은 Markdown에 작성된 LaTeX 수식이 어떻게 렌더링되는지 확인하기 위한 예시입니다.

### 인라인 수식

피타고라스 정리: $a^2 + b^2 = c^2$이며, 오일러 공식은 $e^{i\pi} + 1 = 0$입니다.

### 블록 수식

**적분**

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

**행렬**

$$A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}, \quad \det(A) = a_{11}a_{22} - a_{12}a_{21}$$

**합산 및 극한**

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}, \qquad \lim_{x \to 0} \frac{\sin x}{x} = 1$$

**이차방정식의 근의 공식**

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**편미분 — 열방정식**

$$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$$

**확률 — 정규분포**

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$
