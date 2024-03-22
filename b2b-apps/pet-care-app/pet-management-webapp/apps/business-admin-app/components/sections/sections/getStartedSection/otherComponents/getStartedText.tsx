/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { LogoComponent } from "@pet-management-webapp/business-admin-app/ui/ui-components";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import Image from "next/image";
import { Button, Panel, Stack } from "rsuite";
import getStartedWelcomeImage from
    "../../../../../../../libs/business-admin-app/ui/ui-assets/src/lib/images/getStartedWelcome.svg";
import styles from "../../../../../styles/Settings.module.css";

export default function GetStartedText() {
    return (
        <div className={ styles.getStartedSectionComponentGetStartedTextDiv }>
            <Panel bordered className={ styles.getStartedSectionComponentGetStartedTextPanel }>

                <Stack direction="column" spacing={ 50 } justifyContent="center">

                    <Image src={ getStartedWelcomeImage } alt="profile image" width={ 150 } />

                    <Stack direction="column" spacing={ 10 } justifyContent="center">
                        <p><strong>Welcome to</strong></p>
                        <LogoComponent imageSize="medium" className="" />
                    </Stack>

                    <p className={ styles.getStartedSectionComponentGetStartedTextP }>
                    The comprehensive Enterprise Resource Planning (ERP) system designed specifically for higher education institutions!
                    <br></br><br></br> 
                    With a focus on addressing the unique challenges faced by universities and colleges, Ellucian Banner offers a suite of 
                    integrated solutions to streamline everyday processes. From managing critical student information to delivering services 
                    that keep students on track, Ellucian Banner plays a vital role in enhancing the student experience and supporting 
                    institutional operations. With modules covering areas like human resources, finance, and financial aid, Ellucian Banner 
                    is a key component in empowering institutions to excel and support their students' growth and development effectively.
                    </p>

                    <Stack direction="column" spacing={ 20 } justifyContent="center">
                        <h4>Select one of the settings to get started</h4>
                        <Button appearance="ghost" size="lg">
                            <Stack spacing={ 3 } justifyContent="center" alignItems="center">
                                <PagePreviousIcon />
                                <p>Get Started</p>
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>

            </Panel>

        </div>
    );
}
