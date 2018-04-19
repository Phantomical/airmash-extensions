
Game Map Details
================

The world map is a 
`Miller Projection <https://en.wikipedia.org/wiki/Miller_cylindrical_projection>`_ 
with parts near the poles cut off, coordinates are also
flipped and shifted. The (0, 0) latitude and longitude
is at map coordinates (x, y) = (0, 2300).

To convert from (x, y) coordinates to latitude and longitude,
use the following formula.

.. math::
	:nowrap:

	\begin{align}
	lat =& -( \frac{180}{\pi} )(\frac{5}{4})tan^{-1}(sinh((y - 2300)(\frac{4}{5})(\frac{\frac{\pi}{2}}{8192})))
	\\
	lon =& (\frac{180}{16384})x
	\end{align}
	
Alternatively, the following JavaScript function 
will convert from (x,y) to (lat, lon)

.. code-block:: javascript

    function getLatLon(x, y) {
        return {
            lat: -(180 / Math.PI) * 1.25 * Math.atan(Math.sinh((y - 2300) * 0.8 * (Math.PI * 0.5 / 8192))),
            lon: x * (180 / 16384)
        };
    }
	
To convert back to (x, y) coordinates, use the following formula:

.. math::
	:nowrap:
	
	\begin{align}
	y =& -(\frac{8192}{\frac{\pi}{2}})(\frac{5}{4})sinh^{-1}(tan((\frac{4}{5})(\frac{\pi}{180})lat))+2300
	\\
	x =& (\frac{16384}{180})lon
	\end{align}
	
Or in JavaScript

.. code-block:: javascript

	function getXY(lat, lon) {
		return {
			x: (16384/180) * lon,
			y: -(8192/(Math.PI/2)) * 1.25 * Math.asinh(Math.tan(0.8 * ((Math.PI/180) * lat))) + 2300
		};
	}
