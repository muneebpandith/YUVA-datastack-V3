/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import DataLabel from '../../Core/Series/DataLabel.js';
import H from '../../Core/Globals.js';
var composed = H.composed;
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var Series = SeriesRegistry.series;
import U from '../../Core/Utilities.js';
var merge = U.merge, pick = U.pick, pushUnique = U.pushUnique;
/* *
 *
 *  Composition
 *
 * */
var ColumnDataLabel;
(function (ColumnDataLabel) {
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Override the basic data label alignment by adjusting for the position of
     * the column.
     * @private
     */
    function alignDataLabel(point, dataLabel, options, alignTo, isNew) {
        var inverted = this.chart.inverted, series = point.series, xLen = (series.xAxis ? series.xAxis.len : this.chart.plotSizeX) || 0, yLen = (series.yAxis ? series.yAxis.len : this.chart.plotSizeY) || 0, 
        // Data label box for alignment
        dlBox = point.dlBox || point.shapeArgs, below = pick(point.below, // Range series
        point.plotY >
            pick(this.translatedThreshold, yLen)), 
        // Draw it inside the box?
        inside = pick(options.inside, !!this.options.stacking);
        // Align to the column itself, or the top of it
        if (dlBox) { // Area range uses this method but not alignTo
            alignTo = merge(dlBox);
            // Check for specific overflow and crop conditions (#13240)
            if (!(options.overflow === 'allow' && options.crop === false)) {
                if (alignTo.y < 0) {
                    alignTo.height += alignTo.y;
                    alignTo.y = 0;
                }
                // If parts of the box overshoots outside the plot area, modify
                // the box to center the label inside
                var overshoot = alignTo.y + alignTo.height - yLen;
                if (overshoot > 0 && overshoot < alignTo.height - 1) {
                    alignTo.height -= overshoot;
                }
            }
            if (inverted) {
                alignTo = {
                    x: yLen - alignTo.y - alignTo.height,
                    y: xLen - alignTo.x - alignTo.width,
                    width: alignTo.height,
                    height: alignTo.width
                };
            }
            // Compute the alignment box
            if (!inside) {
                if (inverted) {
                    alignTo.x += below ? 0 : alignTo.width;
                    alignTo.width = 0;
                }
                else {
                    alignTo.y += below ? alignTo.height : 0;
                    alignTo.height = 0;
                }
            }
        }
        // When alignment is undefined (typically columns and bars), display the
        // individual point below or above the point depending on the threshold
        options.align = pick(options.align, !inverted || inside ? 'center' : below ? 'right' : 'left');
        options.verticalAlign = pick(options.verticalAlign, inverted || inside ? 'middle' : below ? 'top' : 'bottom');
        // Call the parent method
        Series.prototype.alignDataLabel.call(this, point, dataLabel, options, alignTo, isNew);
        // If label was justified and we have contrast, set it:
        if (options.inside && point.contrastColor) {
            dataLabel.css({
                color: point.contrastColor
            });
        }
    }
    /** @private */
    function compose(ColumnSeriesClass) {
        DataLabel.compose(Series);
        if (pushUnique(composed, 'ColumnDataLabel')) {
            ColumnSeriesClass.prototype.alignDataLabel = alignDataLabel;
        }
    }
    ColumnDataLabel.compose = compose;
})(ColumnDataLabel || (ColumnDataLabel = {}));
/* *
 *
 *  Default Export
 *
 * */
export default ColumnDataLabel;
