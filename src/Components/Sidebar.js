import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faFolderOpen, faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import getFolderTreeData from './../assets/jsons/FolderTreeData'
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

function Sidebar(props) {

    const [openedNodes, setOpenedNodes] = useState([0, 1, 4, 10, 3]);
    const [FolderTreeData, setFolderTreeData] = useState(getFolderTreeData());
    const [currentNode, setCurrentNode] = useState(0);

    useEffect(()=>{
        setCurrentNode(2);
        props.setCurrentTab(FolderTreeData[2].key);
    }, [])

    const treeNodeSelect = (node_id, file_type) => {
        if(file_type !== "folder"){
            setCurrentNode(node_id);
            props.setCurrentTab(FolderTreeData[node_id].key);
        }
    }

    const treeNodeClick = (node_id) => {
        if (openedNodes.includes(node_id)) {
            let all_children_ids = getAllChildrens(node_id);
            all_children_ids = [...[node_id], ...all_children_ids];
            let local_nodes = openedNodes.filter(function (value, index, arr) {
                return !all_children_ids.includes(value);
            });
            setOpenedNodes([...local_nodes]);
        } else {
            setOpenedNodes([...openedNodes, ...[node_id]]);
        }
    }

    const getAllChildrens = (node_id) => {
        let all_children = [];
        for (let node in FolderTreeData) {
            if (FolderTreeData[node].parent === node_id) {
                all_children.push(parseInt(node));
                all_children = [...all_children, ...getAllChildrens(node)];
            }
        }
        return all_children;
    }
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-main full-box">
                {/*<div className="sidebar-header text-not-selectable">&#60; Code Editor /&#62;</div>*/}
                <div className="folder-tree">
                    {(() => {
                        let tree_jsx = <></>;

                        function treeTraversal(current_id, level) {
                            if (current_id !== 0) {
                                tree_jsx = <>{tree_jsx}
                                    <OverlayTrigger overlay={<Tooltip
                                        id="tooltip-dbclick" className={current_id !== 1 ? "display-none" : ""}>
                                        Double click to select!</Tooltip>} delay={300}>
                                        <div
                                            className={"tree-node parent-node " + (
                                                !openedNodes.includes(parseInt(FolderTreeData[current_id].parent))
                                                    ? "display-none" : "visible-node")}
                                            onClick={() => {
                                                treeNodeClick(current_id);
                                            }}
                                            onDoubleClick={() => {
                                                treeNodeSelect(current_id, FolderTreeData[current_id].file_type)
                                            }
                                            }
                                            style={{paddingLeft: level * (1) + "rem"}}>
                                            <div><FontAwesomeIcon icon={faChevronDown}
                                                                  className={"node-toggle-icon full-box " + (
                                                                      !openedNodes.includes(current_id) ? "closed " : "") + (
                                                                      FolderTreeData[current_id].children.length === 0 ?
                                                                          "visibility-hidden" : "")}/>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={FolderTreeData[current_id].font_awesome_icon}
                                                                 className={"node-thumbnail full-box " + (
                                                                     currentNode === current_id ? "active" : "")}/>
                                            </div>
                                            <div
                                                className={"node-name full-height " + (
                                                    currentNode === current_id ? "active" : "")}>
                                                {FolderTreeData[current_id].displayName}
                                            </div>
                                            {/*<div className={"node-edit full-height " + (*/}
                                            {/*    currentNode === current_id ? "active" : "")}>*/}
                                            {/*    <FontAwesomeIcon icon={faPencilAlt}/>*/}
                                            {/*</div>*/}
                                            {/*<div className={"node-delete full-height " + (*/}
                                            {/*    currentNode === current_id ? "active" : "")}>*/}
                                            {/*    <FontAwesomeIcon icon={faTrashAlt}/>*/}
                                            {/*</div>*/}
                                        </div>
                                    </OverlayTrigger>
                                </>
                            }
                            for (let node in FolderTreeData[current_id].children) {
                                treeTraversal(parseInt(FolderTreeData[current_id].children[node]), level + 1);
                            }
                        }

                        treeTraversal(0, 1);

                        return <>{tree_jsx}</>;
                    })()}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;