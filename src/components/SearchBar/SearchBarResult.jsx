import React, { useEffect, useState } from 'react';
import '../css/SearchBarResult.css'
import DataTable from './ItemTable.tsx';
import ListJson from './ListJson';
import { Chip } from '@material-ui/core';
import { Divider } from '@mui/material';

function SearchBarResult(props) {

    const [searchResult, setSearchResult] = useState({ results: [], itemsResult: [] });
    useEffect(() => {
        if (props.result.length !== 0) {
            searchResult.results = props.result;
            console.log("888888", props.result[0].items[0].sourceOrderLineId)
            searchResult.itemsResult = props.result[0].items.map(({ sourceOrderLineId, materialId, requestedQty, requestedQtyUom, unitPriceAmount, totalGrossAmount,
                totalTaxAmount, isBundleFlag, sourceProductId, lineMaterialTypeCode, requestedMaterialId, requestedMaterialName, totalNetAmount,
                pepMaterialId }) => ({
                    sourceOrderLineId, materialId, requestedQty, requestedQtyUom, unitPriceAmount, totalGrossAmount,
                    totalTaxAmount, isBundleFlag, sourceProductId, lineMaterialTypeCode, requestedMaterialId, requestedMaterialName, totalNetAmount,
                    pepMaterialId
                }))
           // eslint-disable-next-line react-hooks/exhaustive-deps
            setSearchResult((prev => { return { ...prev, ...searchResult } }))
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [props.result]);

    const LabelOutput = (data, i, labData) => {
        return (
            <div key={i} className="div-component">
                <label className="label-component" key={i + 1}>{labData}</label>
                <Chip label={data} ></Chip >
            </div>
        )

    }
    return (
        <div>
            {searchResult.results.length !== 0 && searchResult.results.map((res, id) => {
                return (
                    <div key="searchbar">
                        <div key={25} className="side-by-side" >
                            {LabelOutput(res.id, 0, 'Order ID:')}
                            {LabelOutput(res.receivedDateTime, 1, 'Received Date:')}
                            {LabelOutput(res.createdDateTime, 2, 'Created Date Time:')}
                            {LabelOutput(res.sourceOrderId, 3, 'Source Order ID:')}
                            {LabelOutput(res.reasonDescription, 4, 'Reason Description:')}
                        </div>
                        <div key={26} className="side-by-side" >
                            {LabelOutput(res.statusCode, 5, 'Status Code')}
                            {LabelOutput(res.orderProcessingStatus, 6, 'Order Processig Status:')}
                            {LabelOutput(res.orderProcessingStatusReason, 7, 'Order Processing Status Reason:')}
                            {LabelOutput(res.orderPaymentStatus, 8, 'Order Payment Status:')}
                            {LabelOutput(res.countryIsoCode, 9, 'Country ISO Code:')}
                            {LabelOutput(res.sourceSystemId, 10, 'Source System ID:')}
                        </div>
                        <div key={27} className="side-by-side" >
                            {LabelOutput(res.orderChannelMethodCode, 11, 'Order Channel Method Code:')}
                            {LabelOutput(res.soldToCustomerId, 12, 'Sold to Customer ID:')}
                            {LabelOutput(res.requestedDeliveryDateTime, 13, 'Requested Delivery Date:')}
                            {LabelOutput(res.totalRequestedQty, 14, 'Total Requested Quantity:')}
                            {LabelOutput(res.totalGrossAmount, 15, 'Total Gross Amount:')}
                            {LabelOutput(res.totalTaxAmount, 16, 'Total Tax Amount:')}
                        </div>
                        <div key={28} className="side-by-side" >

                            {LabelOutput(res.netTotalAmount, 17, 'Net Total Amount:')}
                            {LabelOutput(res.orderTagsText, 18, 'Order Tag Text:')}
                            {LabelOutput(res.routeId, 19, 'Route ID:')}
                            {LabelOutput(res.orderLocationId, 20, 'Order Location ID:')}
                            {LabelOutput(res.extendedAttributesMap.salesforceOrderId, 21, 'Order Tag Text:')}
                            {LabelOutput(res.extendedAttributesMap.mdgLocationId, 22, 'MDG Location:')}
                            {LabelOutput(res.extendedAttributesMap.mdgCustomerId, 23, 'MDG Customer ID:')}
                            {LabelOutput(res.extendedAttributesMap.mdgRouteId, 24, 'MDG Route ID:')}
                        </div>
                    </div>
                )
            })
            }
            <Divider></Divider>
            {searchResult.results.length !== 0 && <DataTable searchResult={searchResult.results} itemsResult={searchResult.itemsResult}></DataTable>}
            <br />
            {searchResult.results.length !== 0 && <ListJson searchResult={searchResult.results[0]} ></ListJson>}
        </div>
    )
}

export default SearchBarResult;