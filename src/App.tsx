import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import { Button, Dialog, Intent } from '@blueprintjs/core';
import * as csstips from 'csstips';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { style } from 'typestyle';
import { DateRangePicker, DateRange } from '@blueprintjs/datetime';
import * as dateTimeUtils from './DateTimeUtils';

interface IProps {
}

const STYLE_PANEL_EVENT_DATE = style(
    csstips.content,
    csstips.horizontal,
    csstips.height('460px')
);

const TABLE_HEIGHT = 350;

@observer export class App extends React.Component<IProps, {}> {

    @observable private selectedDateRange: DateRange = [undefined, undefined];

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <div className={style(csstips.fillParent, csstips.vertical)}>
                    <div className={style(csstips.horizontal, csstips.padding(20), csstips.gridSpaced(10))}>
                        <Button intent={Intent.PRIMARY} text={'Last hour'} onClick={() => { this.selectedDateRange = dateTimeUtils.getLastHour(); }}/>
                        <Button intent={Intent.PRIMARY} text={'Last 2 hours'} onClick={() => { this.selectedDateRange = dateTimeUtils.getLast2Hours(); }}/>
                        <Button intent={Intent.PRIMARY} text={'Last 24 hours'} onClick={() => { this.selectedDateRange = dateTimeUtils.getLast24Hours(); }}/>
                        <div className={style(csstips.padding(0, 0, 0, 50))}></div>
                        <div className={style(csstips.flex)}></div>
                    </div>
                    <div className={style(csstips.horizontal)}>
                        <div className={style(csstips.flex)}></div>
                        <div className={style(csstips.content)}>
                            <DateRangePicker
                                value={this.selectedDateRange}
                                onChange={(selectedDateRange: DateRange) => this.selectedDateRange = selectedDateRange}
                                allowSingleDayRange={true}
                                contiguousCalendarMonths={false}
                                timePrecision={'second'}
                                shortcuts={false}
                                timePickerProps={{
                                    useAmPm: true
                                }}
                            />
                        </div>
                        <div className={style(csstips.flex)}></div>
                    </div>
                    <div>
                      <div>From date {this.selectedDateRange[0] ? this.selectedDateRange[0].toISOString() : 'null'}</div>
                      <div>To date {this.selectedDateRange[1] ? this.selectedDateRange[1].toISOString() : 'null'}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
