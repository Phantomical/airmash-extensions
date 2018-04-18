
Game Map Details
================

The world map is a Miller Projection with parts near the poles cut off.
The \\( (0, 0) \\) latitude and longitude is at map coordinates \\((x, y) = (0, 2300)\\).

To convert from \\((x, y)\\) coordinates to latitude and longitude, use the 
following formula.

.. math::
	:nowrap:

	\begin{align}
	lat =& -( \frac{180}{\pi} )(\frac{5}{4})tan^{-1}(sinh((y - 2300)(\frac{4}{5})(\frac{\frac{\pi}{2}}{8192})))
	\\
	lon =& (\frac{180}{16384})x
	\end{align}
	
