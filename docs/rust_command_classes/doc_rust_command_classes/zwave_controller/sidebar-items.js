initSidebarItems({"enum":[["E_ROUTING_SCHEME","Transport routing scheme state define definitions"],["_E_ROUTING_SCHEME_","Transport routing scheme state define definitions"],["rf_power_level_t","RF power level values used with zwapi_set_rf_power_level() and zwapi_get_rf_power_level()"],["zwave_controller_encapsulation_scheme_t","Encapsulation schemes"],["zwave_controller_region_t","@name zwapi_rf_region_t These definitions represent possible rf settings for the Z-Wave module RF region values used with zwapi_set_rf_region() and zwapi_get_rf_region() @{"],["zwave_kex_fail_type_t","@brief Error codes used in S2 inclusion"],["zwave_network_management_error_t",""],["zwave_network_management_state_t","@brief States of the Network Management module."],["zwave_node_id_basetype_t","@name zwapi_nodeid_basetype_t These definitions represent possible node id basetype settings for the Z-Wave module They are used with zwapi_set_node_id_basetype() @{"],["zwave_protocol","@brief Z-Wave Inclusion Protocol (Z-Wave / Z-Wave Long Range)."],["zwave_protocol_t","@brief Z-Wave Inclusion Protocol (Z-Wave / Z-Wave Long Range)."],["zwave_rf_region_t","@name zwapi_rf_region_t These definitions represent possible rf settings for the Z-Wave module RF region values used with zwapi_set_rf_region() and zwapi_get_rf_region() @{"]],"fn":[["zwave_controller_callbacks_init","@brief Reset all callback structures."],["zwave_controller_deregister_callbacks","@brief Let another component deregister its callbacks for Z-Wave Controller events"],["zwave_controller_encapsulation_scheme_greater_equal","@brief Function to tell whether scheme k is greater or equal to scheme v."],["zwave_controller_get_dsk","@brief Retrieve the DSK of the controller."],["zwave_controller_get_highest_encapsulation","@brief Get the hight encapsulation supported by a given key set."],["zwave_controller_on_dsk_report","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_error","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_frame_received","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_frame_transmission_failed","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_frame_transmission_success","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_keys_report","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_multicast_group_deleted","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_new_network_entered","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_new_suc","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_node_added","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_node_deleted","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_node_id_assigned","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_node_info_req_failed","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_node_information","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_request_neighbor_update","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_reset_step_complete","@brief Informs the Z-Wave Controller that a Reset Step is completed."],["zwave_controller_on_smart_start_inclusion_request","see @ref zwave_controller_callbacks_t"],["zwave_controller_on_state_updated","see @ref zwave_controller_callbacks_t"],["zwave_controller_register_callbacks","@brief Let another component register its callbacks for Z-Wave Controller events."],["zwave_controller_register_reset_step","@brief Let another component register a step to perform when being reset"],["zwave_controller_reset","@brief Instructs the Z-Wave Controller to initiate a Set Default / Reset operation"],["zwave_controller_set_application_nif","@brief Set the application part of the node information frame (NIF)."],["zwave_controller_set_secure_application_nif","@brief Set the secure node information."],["zwave_controller_transport_is_encapsulation_cc","@brief check if a command class is registered as an encapsulation cc in Z-Wave controller transport framework. If it does, the module will retrun the version of the encapsulation command class."],["zwave_controller_transport_register","@brief Must be called to register a transport."],["zwave_controller_transport_send_data","@brief Send a frame with transport plugin system"],["zwave_node_get_command_class_version","@brief Return the version of a Command Class implemented by a node."],["zwave_node_supports_command_class","@brief Verify whether a node/endpoint supports a Command Class using the attribute Store."]],"struct":[["_S_ROUTE_LINK_",""],["rssi_val","RSSI value array used in zwapi_tx_report_t. Each value is an RSSI feedback constant defined above."],["zwapi_tx_report","@brief Detailed report and data about Z-Wave transmissions"],["zwave_controller_callbacks_t","@brief The following structure holds all the callbacks this module will emit."],["zwave_controller_connection_info","@brief Structure holding information about the source and destination when transmitting and receiving Z-Wave frames."],["zwave_controller_endpoint_t",""],["zwave_controller_transport","@brief Hold information about a transport plugin."],["zwave_node_info_t","@brief Structure holding a Z-Wave node info frame."],["zwave_rx_receive_options_t","@brief Describing receive parameters of a frame."],["zwave_tx_options",""]],"type":[["S_ROUTE_LINK",""],["on_zwave_tx_send_data_complete_t","@brief Callback function of zwave_tx_send_data(), indicating the result of the operation"],["sl_status_t",""],["zwapi_tx_report_t","@brief Detailed report and data about Z-Wave transmissions"],["zwave_command_class_t",""],["zwave_controller_connection_info_t","@brief Structure holding information about the source and destination when transmitting and receiving Z-Wave frames."],["zwave_controller_reset_step_t","Function type for a Z-Wave Controller reset step The function MUST return SL_STATUS_OK if it will invoke the zwave_controller_on_reset_step_complete later. Any other status if it will not invoke the zwave_controller_on_reset_step_complete"],["zwave_controller_transport_t","@brief Hold information about a transport plugin."],["zwave_dsk_t",""],["zwave_endpoint_id_t",""],["zwave_home_id_t","Z-Wave HomeID type"],["zwave_keyset_t",""],["zwave_multicast_group_id_t",""],["zwave_node_id_t","Z-Wave NodeID type"],["zwave_node_list_t",""],["zwave_nodemask_t","Node mask"],["zwave_tx_options_t",""],["zwave_tx_session_id_t","@brief Handle that can be used for aborting ongoing transmissions or identifying TX Queue elements."]],"union":[["zwave_controller_endpoint_t__bindgen_ty_1",""]]});